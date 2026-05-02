import { createFileRoute, Link } from "@tanstack/react-router";
import { PortalHeader } from "@/components/portal/PortalHeader";
import { PortalFooter } from "@/components/portal/PortalFooter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  component: SobrePage,
});

function SobrePage() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground selection:bg-primary/10">
      <PortalHeader />
      
      <main className="pt-56 pb-32">
        <div className="mx-auto max-w-[90rem] px-8 lg:px-16">
          <div className="max-w-4xl mb-32">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary/40 mb-10 block">Institucional</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-medium mb-12 leading-[1.05] tracking-tighter italic">
              A Missão.
            </h1>
            <p className="text-3xl leading-relaxed text-muted-foreground font-light italic">
              O Chapada dos Veadeiros Online é um ecossistema editorial desenhado para transformar o desejo em decisão consciente.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-24 items-start mb-32">
             <div className="prose prose-stone prose-xl max-w-none font-light leading-relaxed">
                <p>
                  A Chapada dos Veadeiros é um destino de profundidade. Composta por Alto Paraíso, São Jorge e Cavalcante, a região exige do viajante uma clareza que nem sempre os portais de notícias genéricos conseguem entregar.
                </p>
                <p>
                  Neste contexto, o portal foi criado sob a curadoria da <strong>SOBI DIGITAL</strong> para reunir conteúdo editorial de alto padrão, curadoria de hospedagens e roteiros desenhados com intenção.
                </p>
             </div>
             
             <div className="grid gap-10">
                <div className="border border-border p-12 bg-white group hover:border-primary transition-colors">
                  <h3 className="font-display text-2xl font-bold mb-6 tracking-tight">Qualidade Editorial</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">Não buscamos o volume; buscamos a relevância. Cada guia e recomendação passa pelo filtro da curadoria premium SOBI DIGITAL.</p>
                </div>
                <div className="border border-border p-12 bg-white group hover:border-primary transition-colors">
                  <h3 className="font-display text-2xl font-bold mb-6 tracking-tight">Foco em Experiência</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">Acreditamos que onde você escolhe ficar dita o tom de toda a sua jornada pelo cerrado brasileiro.</p>
                </div>
             </div>
          </div>

          <div className="mt-32 p-24 bg-secondary border border-border text-center">
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-primary/40 mb-10 block">Próximos Passos</span>
            <h2 className="font-display text-4xl mb-12 tracking-tight">Explore a Curadoria SOBI</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/onde-ficar">
                <Button className="rounded-none bg-primary px-12 py-8 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-foreground transition-all">Regiões</Button>
              </Link>
              <Link to="/pousadas">
                <Button variant="outline" className="rounded-none border-border px-12 py-8 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-foreground hover:text-background transition-all">Hospedagens</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <PortalFooter />
    </div>
  );
}
