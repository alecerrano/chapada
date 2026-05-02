import { createFileRoute, Link } from "@tanstack/react-router";
import { PortalHeader } from "@/components/portal/PortalHeader";
import { PortalFooter } from "@/components/portal/PortalFooter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/para-pousadas")({
  component: ParaPousadas,
});

function ParaPousadas() {
  const formatos = [
    {
      title: "Destaque Local",
      desc: "Visibilidade estratégica em páginas de regiões específicas do portal.",
      items: ["Card prioritário por cidade", "Menção em artigos curados", "Botão de conversão direta"]
    },
    {
      title: "Página Editorial",
      desc: "Um espaço dedicado com conteúdo profundo para converter viajantes exigentes.",
      items: ["Apresentação completa da pousada", "Galeria em alta resolução", "Destaque de diferenciais"]
    },
    {
      title: "Presença Premium",
      desc: "A máxima autoridade que uma marca pode exercer dentro da nossa curadoria.",
      items: ["Featured na home page", "Presença nativa em roteiros", "Métricas mensais de audiência"]
    },
    {
      title: "SOBI Digital Ecosystem",
      desc: "Presença no portal integrada a um site próprio de alta performance.",
      items: ["Ecossistema digital completo", "Site profissional otimizado", "Gestão de SEO Local"]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-body text-foreground selection:bg-primary/10">
      <PortalHeader />
      <main className="pt-56 pb-32">
        <div className="mx-auto max-w-[90rem] px-8 lg:px-16">
          <div className="max-w-5xl mb-32">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-10 block">Parceria Estratégica</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-medium mb-12 leading-[1] tracking-tighter">
              Destaque seu <br /><span className="italic font-light text-primary">Ativo no Cerrado.</span>
            </h1>
            <p className="text-3xl text-muted-foreground mb-16 leading-relaxed italic font-light max-w-3xl">
              Conectamos hospedagens e experiências de alto padrão a viajantes que buscam clareza, beleza e curadoria.
            </p>
            
            <Button size="lg" className="rounded-none px-16 py-10 font-bold uppercase tracking-[0.3em] bg-primary hover:bg-foreground transition-all">
              Consultar Apresentação SOBI DIGITAL
            </Button>
          </div>

          <section className="mb-48">
            <div className="flex items-center gap-10 mb-24">
               <h2 className="font-display text-4xl font-medium uppercase tracking-tighter">Formatos de Visibilidade</h2>
               <div className="h-[1px] flex-grow bg-border" />
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
              {formatos.map(f => (
                <div key={f.title} className="bg-background p-12 hover:bg-secondary transition-all flex flex-col group">
                  <h3 className="font-display text-3xl font-medium mb-6 leading-tight group-hover:text-primary transition-colors">{f.title}</h3>
                  <p className="text-sm text-muted-foreground mb-12 leading-relaxed font-light">{f.desc}</p>
                  <ul className="space-y-6 mt-auto">
                    {f.items.map(item => (
                      <li key={item} className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-foreground/70">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary/40 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          
          <div className="bg-foreground text-background p-24 lg:p-32 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
             <div className="relative z-10">
               <h2 className="font-display text-4xl md:text-6xl mb-12 tracking-tighter italic">"Organizamos a decisão para quem busca o extraordinário."</h2>
               <Link to="/">
                 <Button variant="outline" className="rounded-none border-white/20 text-white hover:bg-white hover:text-black px-12 py-8 text-[10px] font-bold uppercase tracking-[0.3em]">Retornar ao Portal</Button>
               </Link>
             </div>
          </div>
        </div>
      </main>
      <PortalFooter />
    </div>
  );
}
