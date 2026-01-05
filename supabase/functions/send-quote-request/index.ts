import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface QuoteRequest {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, company, email, phone, service, message }: QuoteRequest = await req.json();

    console.log("Received quote request from:", name, email);

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

    const recipients = ["mclsouza1613ad@gmail.com", "marcelinosouza.dev@gmail.com"];

    const emailContent = `
Nova Solicitação de Orçamento - Tecnoiso

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DADOS DO CLIENTE:

Nome: ${name}
Empresa: ${company}
E-mail: ${email}
Telefone: ${phone}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SERVIÇO DE INTERESSE:
${service}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MENSAGEM:
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Este e-mail foi enviado automaticamente pelo formulário de contato do site Tecnoiso.
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
    .message-box { background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #c9a227; }
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
          <div class="field-value">${name}</div>
        </div>
        <div class="field">
          <div class="field-label">Empresa</div>
          <div class="field-value">${company}</div>
        </div>
        <div class="field">
          <div class="field-label">E-mail</div>
          <div class="field-value"><a href="mailto:${email}">${email}</a></div>
        </div>
        <div class="field">
          <div class="field-label">Telefone</div>
          <div class="field-value"><a href="tel:${phone}">${phone}</a></div>
        </div>
      </div>
      <div class="section">
        <div class="section-title">Serviço de Interesse</div>
        <div class="field-value">${service}</div>
      </div>
      <div class="section">
        <div class="section-title">Mensagem</div>
        <div class="message-box">${message}</div>
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
      subject: `[Tecnoiso] Nova Solicitação de Orçamento - ${name}`,
      content: emailContent,
      html: htmlContent,
    });

    await client.close();

    console.log("Email sent successfully to:", recipients.join(", "));

    return new Response(
      JSON.stringify({ success: true, message: "Email enviado com sucesso!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
