import { createFileRoute, Link } from "@tanstack/react-router";
import { blogPosts } from "@/lib/blog-data";
import { PortalHeader } from "@/components/portal/PortalHeader";
import { PortalFooter } from "@/components/portal/PortalFooter";
import { Button } from "@/components/ui/button";
import { Clock, ArrowLeft, ArrowRight } from "lucide-react";
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
    <div className="min-h-screen bg-background font-body text-foreground selection:bg-primary/10">
      <PortalHeader />
      
      <main className="pt-48 pb-32">
        <article className="mx-auto max-w-[90rem] px-8 lg:px-16">
          <Link to="/" className="group mb-16 inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-all">
            <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-2" /> Voltar para o início
          </Link>

          <div className="grid lg:grid-cols-[1fr_350px] gap-24 items-start">
            <div>
              <header className="mb-20">
                <div className="flex items-center gap-6 mb-10">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">
                    {post.category}
                  </span>
                  <div className="h-[1px] w-8 bg-border" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-2">
                    <Clock className="h-3 w-3" /> {post.date}
                  </span>
                </div>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] tracking-tighter mb-10">
                  {post.title}
                </h1>
                <p className="text-2xl md:text-3xl text-muted-foreground italic font-light leading-snug max-w-3xl">
                  {post.subtitle}
                </p>
              </header>

              <div className="aspect-[16/9] w-full overflow-hidden mb-20 bg-muted">
                <img src={heroImg} alt={post.title} className="h-full w-full object-cover transition-transform duration-[10s] hover:scale-105" />
              </div>

              <div className="max-w-3xl">
                <div className="p-12 bg-secondary/30 mb-16 border-l-[1px] border-primary">
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/40 block mb-6">Briefing</span>
                  <p className="text-xl leading-relaxed italic font-light text-foreground/80">
                    Este guia foi desenhado para organizar a decisão sobre {post.title.toLowerCase()}. Abaixo, nossa curadoria editorial sobre o que realmente importa.
                  </p>
                </div>

                <div className="prose prose-stone prose-xl max-w-none prose-headings:font-display prose-headings:font-medium prose-headings:tracking-tight prose-p:leading-relaxed prose-p:font-light">
                  <p>{post.content}</p>
                  <p>A Chapada dos Veadeiros não é apenas um local no mapa de Goiás; é um ecossistema de alta energia, onde o solo de quartzo e as águas límpidas do cerrado criam um ambiente de profunda desconexão com o ritmo urbano.</p>
                  
                  <h2 className="text-4xl mt-20 mb-10">Estratégia e Planejamento</h2>
                  <p>Para viver a Chapada com intenção, o planejamento deve começar pela base. Alto Paraíso oferece o conforto da cidade, São Jorge a mística da vila e Cavalcante a crueza da natureza selvagem. Cada escolha dita o ritmo da sua jornada.</p>
                  
                  <div className="my-20 p-12 bg-foreground text-background">
                     <h3 className="text-2xl font-display font-medium mb-6 text-background uppercase tracking-tight">O que considerar:</h3>
                     <ul className="space-y-6 list-none p-0">
                        <li className="flex items-start gap-4 border-b border-background/10 pb-6 last:border-0 last:pb-0">
                           <span className="text-accent font-bold">01.</span>
                           <span className="text-sm uppercase tracking-widest font-medium">Logística de Deslocamento</span>
                        </li>
                        <li className="flex items-start gap-4 border-b border-background/10 pb-6 last:border-0 last:pb-0">
                           <span className="text-accent font-bold">02.</span>
                           <span className="text-sm uppercase tracking-widest font-medium">Contratação de Guias Locais</span>
                        </li>
                        <li className="flex items-start gap-4 border-b border-background/10 pb-6 last:border-0 last:pb-0">
                           <span className="text-accent font-bold">03.</span>
                           <span className="text-sm uppercase tracking-widest font-medium">Reserva Antecipada de Pousadas</span>
                        </li>
                     </ul>
                  </div>

                  <p>Este guia continuará sendo atualizado conforme novas experiências e hospedagens entram no radar da nossa curadoria. A Chapada está em constante mutação, e nossa missão é manter o caminho claro para você.</p>
                </div>
              </div>
            </div>

            {/* Sidebar Editorial */}
            <aside className="sticky top-48 hidden lg:block">
               <div className="flex flex-col gap-16">
                  <div className="p-10 bg-secondary border border-border">
                     <span className="text-[9px] font-black uppercase tracking-[0.4em] text-primary mb-6 block">Sugestão SOBI</span>
                     <h4 className="font-display text-2xl font-bold mb-6 tracking-tight leading-tight">Hospedagem com Intenção</h4>
                     <p className="text-sm text-muted-foreground font-light leading-relaxed mb-8">Escolher bem onde ficar muda toda a jornada. Confira nossa seleção de pousadas premium.</p>
                     <Link to="/pousadas">
                        <Button className="w-full rounded-none py-6 text-[10px] font-bold uppercase tracking-[0.2em]">Ver Curadoria</Button>
                     </Link>
                  </div>
                  
                  <div className="flex flex-col gap-8">
                     <span className="text-[9px] font-black uppercase tracking-[0.4em] text-foreground/30 block">Leitura Relacionada</span>
                     <div className="flex flex-col gap-10">
                        {blogPosts.filter(p => p.slug !== post.slug).slice(0, 3).map(p => (
                           <Link key={p.slug} to={`/guia/${p.slug}` as any} className="group flex flex-col gap-3">
                              <span className="text-[8px] font-bold uppercase tracking-widest text-primary/60">{p.category}</span>
                              <h5 className="font-display text-lg font-medium leading-snug group-hover:text-primary transition-colors">{p.title}</h5>
                              <ArrowRight className="h-3 w-3 text-muted-foreground group-hover:translate-x-2 transition-transform" />
                           </Link>
                        ))}
                     </div>
                  </div>
               </div>
            </aside>
          </div>
        </article>
      </main>

      <PortalFooter />
    </div>
  );
}
