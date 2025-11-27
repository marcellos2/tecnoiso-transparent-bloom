import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

const Blog = () => {
  const [posts] = useState<BlogPost[]>([
    {
      id: 1,
      title: "Transformação digital da indústria",
      excerpt: "Como a tecnologia está revolucionando os processos industriais e a metrologia moderna.",
      date: "2024-03-15",
      author: "Equipe Tecnoiso",
      category: "Tecnologia",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Inovações em calibração de precisão",
      excerpt: "Descubra as últimas tendências em equipamentos de calibração e como elas impactam a qualidade.",
      date: "2024-03-10",
      author: "Equipe Tecnoiso",
      category: "Metrologia",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Certificação ISO: Guia completo",
      excerpt: "Tudo o que você precisa saber sobre certificações ISO e sua importância para sua empresa.",
      date: "2024-03-05",
      author: "Equipe Tecnoiso",
      category: "Qualidade",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Automação industrial 4.0",
      excerpt: "O futuro da automação e como ela está transformando a indústria brasileira.",
      date: "2024-02-28",
      author: "Equipe Tecnoiso",
      category: "Automação",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Gestão metrológica eficiente",
      excerpt: "Melhores práticas para gerenciar seus instrumentos de medição e garantir conformidade.",
      date: "2024-02-20",
      author: "Equipe Tecnoiso",
      category: "Gestão",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Tendências em instrumentação",
      excerpt: "Conheça as novidades tecnológicas em instrumentos de medição para 2024.",
      date: "2024-02-15",
      author: "Equipe Tecnoiso",
      category: "Tecnologia",
      image: "/placeholder.svg"
    }
  ]);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-background via-muted to-background overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,hsl(var(--brand-red))_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-brand-red bg-brand-red/10 rounded-full">
              Novo post no blog!
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Blog </span>
              <span className="text-transparent bg-gradient-to-r from-[hsl(var(--brand-red))] to-[hsl(var(--brand-red-light))] bg-clip-text">
                Tecnoiso
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Fique por dentro das novidades em metrologia, tecnologia e inovação industrial
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="group hover:shadow-[var(--shadow-red-soft)] transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-muted-foreground/20">{post.id}</span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </span>
                    <span className="px-3 py-1 bg-brand-red/10 text-brand-red rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand-red transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    
                    <Button variant="ghost" size="sm" className="group-hover:text-brand-red">
                      Ler mais
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
