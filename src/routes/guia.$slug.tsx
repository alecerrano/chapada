import { createFileRoute, Link } from "@tanstack/react-router";
import { blogPosts } from "@/lib/blog-data";
import { PortalHeader } from "@/components/portal/PortalHeader";
import { PortalFooter } from "@/components/portal/PortalFooter";
import { Button } from "@/components/ui/button";
import { ChevronRight, Clock, Tag, ArrowLeft } from "lucide-react";
import heroImg from "@/assets/hero-chapada.jpg";

export const Route = createFileRoute("/guia/$slug")({
  component: ArticlePage,
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw new Error("Artigo não encontrado");
    return post;
  },
});

function ArticlePage() {
  const post = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background font-body">
      <PortalHeader />
      
      <main className="pt-32 pb-24">
        <article className="mx-auto max-w-4xl px-6">
          <Link to="/" className="mb-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-3 w-3" /> Voltar para o início
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                {post.category}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-1">
                <Clock className="h-3 w-3" /> {post.date}
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-medium leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground italic font-light leading-relaxed">
              {post.subtitle}
            </p>
          </header>

          <div className="aspect-video w-full overflow-hidden mb-12 border border-border">
            <img src={heroImg} alt={post.title} className="h-full w-full object-cover" />
          </div>

          <div className="prose prose-stone prose-lg max-w-none prose-headings:font-display prose-headings:font-medium">
            <div className="p-8 bg-secondary/50 border-l-4 border-primary mb-12 italic text-lg leading-relaxed">
              Resumo rápido: Este guia explora os detalhes fundamentais para quem busca {post.title.toLowerCase()}. Planejamento, curadoria e as melhores dicas da Chapada dos Veadeiros.
            </div>

            <p>{post.content}</p>
            <p>A Chapada dos Veadeiros é um destino que exige intenção. Não basta chegar; é preciso sentir o cerrado, entender o tempo das águas e respeitar a energia do cristal de quartzo que permeia o solo.</p>
            
            <h2 className="text-3xl mt-12 mb-6">Pontos de Atenção</h2>
            <ul className="space-y-4">
              <li><strong>Deslocamentos:</strong> As distâncias entre Alto Paraíso, São Jorge e Cavalcante podem ser longas.</li>
              <li><strong>Guia:</strong> Muitas atrações exigem a presença de guias credenciados.</li>
              <li><strong>Conexão:</strong> O sinal de celular é instável em várias partes do parque e vilas.</li>
            </ul>

            <div className="mt-24 p-12 bg-primary text-primary-foreground text-center">
              <h2 className="font-display text-3xl mb-6 text-white">Pronto para viver essa experiência?</h2>
              <p className="mb-10 text-white/80 max-w-xl mx-auto">Escolher bem onde ficar muda toda a jornada. Confira nossa curadoria de pousadas selecionadas.</p>
              <Link to="/pousadas">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-none px-12 py-7 font-bold uppercase tracking-widest">
                  Ver Pousadas Selecionadas
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <PortalFooter />
    </div>
  );
}
