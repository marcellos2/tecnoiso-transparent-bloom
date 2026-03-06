import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const ALLOWED_ORIGINS = [
  "https://tecnoiso.com.br",
  "https://www.tecnoiso.com.br",
  "https://tecnoiso.vercel.app",
  "https://id-preview--f5d781a9-8828-4b0f-b424-1111b3ac3959.lovable.app",
];

function getCorsHeaders(req: Request) {
  const origin = req.headers.get("origin") || "";
  const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
}

// Simple in-memory rate limiter (per edge function instance)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5; // max requests
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

// Sanitize input to prevent XSS in HTML emails
function sanitizeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

// Validation helpers
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

function isValidLength(str: string, min: number, max: number): boolean {
  return str.length >= min && str.length <= max;
}

interface QuoteRequest {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  const corsHeaders = getCorsHeaders(req);

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ success: false, error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  // Rate limiting
  const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(clientIp)) {
    return new Response(
      JSON.stringify({ success: false, error: "Muitas solicitações. Tente novamente mais tarde." }),
      { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }

  try {
    const body = await req.json();
    const { name, company, email, phone, service, message } = body as QuoteRequest;

    // Server-side validation
    const errors: string[] = [];

    if (!name || !isValidLength(name.trim(), 2, 100)) {
      errors.push("Nome inválido (2-100 caracteres)");
    }
    if (!email || !isValidEmail(email.trim())) {
      errors.push("E-mail inválido");
    }
    if (!phone || !isValidPhone(phone.trim())) {
      errors.push("Telefone inválido");
    }
    if (!message || !isValidLength(message.trim(), 10, 2000)) {
      errors.push("Mensagem inválida (10-2000 caracteres)");
    }
    if (company && !isValidLength(company.trim(), 0, 200)) {
      errors.push("Nome da empresa muito longo (máx. 200 caracteres)");
    }
    if (service && !isValidLength(service.trim(), 0, 300)) {
      errors.push("Serviço muito longo (máx. 300 caracteres)");
    }

    if (errors.length > 0) {
      return new Response(
        JSON.stringify({ success: false, error: errors.join("; ") }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Sanitize all inputs for HTML email
    const safeName = sanitizeHtml(name.trim());
    const safeCompany = sanitizeHtml((company || "").trim());
    const safeEmail = sanitizeHtml(email.trim());
    const safePhone = sanitizeHtml(phone.trim());
    const safeService = sanitizeHtml((service || "").trim());
    const safeMessage = sanitizeHtml(message.trim());

    console.log("Received quote request from:", safeName, safeEmail);

    const smtpEmail = Deno.env.get("SMTP_EMAIL");
    const smtpPassword = Deno.env.get("SMTP_APP_PASSWORD");

    if (!smtpEmail || !smtpPassword) {
      throw new Error("SMTP credentials not configured");
    }

    const client = new SMTPClient({
      connection: {
        hostname: "smtp.gmail.com",
        port: 465,
        tls: true,
        auth: {
          username: smtpEmail,
          password: smtpPassword,
        },
      },
    });

    const recipients = ["mclsouza1613ad@gmail.com", "marcelinosouza.dev@gmail.com", "maristela@tecnoiso.com"];

    const emailContent = `
Nova Solicitacao de Orcamento - Tecnoiso

----------------------------------------

DADOS DO CLIENTE:

Nome: ${safeName}
Empresa: ${safeCompany}
E-mail: ${safeEmail}
Telefone: ${safePhone}

----------------------------------------

SERVICO DE INTERESSE:
${safeService}

----------------------------------------

MENSAGEM:
${safeMessage}

----------------------------------------

Este e-mail foi enviado automaticamente pelo formulario de contato do site Tecnoiso.
    `;

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
    .header { background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 30px; text-align: center; }
    .header h1 { margin: 0; font-size: 24px; }
    .content { padding: 30px; }
    .section { margin-bottom: 25px; }
    .section-title { color: #1e3a5f; font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; border-bottom: 2px solid #c9a227; padding-bottom: 5px; }
    .field { margin-bottom: 10px; }
    .field-label { color: #666; font-size: 12px; text-transform: uppercase; }
    .field-value { color: #333; font-size: 16px; margin-top: 2px; }
    .message-box { background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #c9a227; white-space: pre-wrap; word-break: break-word; }
    .footer { background-color: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📋 Nova Solicitação de Orçamento</h1>
    </div>
    <div class="content">
      <div class="section">
        <div class="section-title">Dados do Cliente</div>
        <div class="field">
          <div class="field-label">Nome</div>
          <div class="field-value">${safeName}</div>
        </div>
        <div class="field">
          <div class="field-label">Empresa</div>
          <div class="field-value">${safeCompany}</div>
        </div>
        <div class="field">
          <div class="field-label">E-mail</div>
          <div class="field-value">${safeEmail}</div>
        </div>
        <div class="field">
          <div class="field-label">Telefone</div>
          <div class="field-value">${safePhone}</div>
        </div>
      </div>
      <div class="section">
        <div class="section-title">Serviço de Interesse</div>
        <div class="field-value">${safeService}</div>
      </div>
      <div class="section">
        <div class="section-title">Mensagem</div>
        <div class="message-box">${safeMessage}</div>
      </div>
    </div>
    <div class="footer">
      Este e-mail foi enviado automaticamente pelo formulário de contato do site Tecnoiso.
    </div>
  </div>
</body>
</html>
    `;

    await client.send({
      from: smtpEmail,
      to: recipients,
      subject: `[Tecnoiso] Nova Solicitacao de Orcamento - ${safeName}`,
      content: "auto",
      html: htmlContent,
      encoding: "base64",
    });

    await client.close();

    console.log("Email sent successfully to:", recipients.join(", "));

    return new Response(
      JSON.stringify({ success: true, message: "Email enviado com sucesso!" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Erro interno. Tente novamente." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
