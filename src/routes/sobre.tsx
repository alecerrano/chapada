import { createFileRoute, Link } from "@tanstack/react-router";
import { PortalHeader } from "@/components/portal/PortalHeader";
import { PortalFooter } from "@/components/portal/PortalFooter";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/sobre")({
  component: SobrePage,
});

function SobrePage() {
  return (
    <div className="min-h-screen bg-background font-body">
      <PortalHeader />
      
      <main className="pt-40 pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="font-display text-4xl md:text-6xl font-medium mb-12 text-center">Sobre o Chapada dos Veadeiros Online</h1>
          
          <div className="prose prose-stone prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-muted-foreground mb-12 text-center">
              O Chapada dos Veadeiros Online é um projeto editorial da SOBI DIGITAL criado para ajudar viajantes a planejar melhor sua experiência na Chapada dos Veadeiros.
            </p>
            
            <p>
              Nascemos da percepção de que a Chapada é um destino de desejo, mas que muitas vezes gera dúvidas no planejamento. Alto Paraíso? São Jorge? Cavalcante? Onde ficar? Qual roteiro seguir?
            </p>
            
            <p>
              Nossa missão é reunir conteúdo editorial de alto padrão, curadoria de hospedagens, roteiros testados e informações úteis em uma plataforma clara, bonita e confiável.
            </p>

            <div className="my-24 grid sm:grid-cols-2 gap-12">
              <div className="border border-border p-10">
                <h3 className="font-display text-2xl font-bold mb-4">Editorial e Curadoria</h3>
                <p className="text-sm text-muted-foreground">Não somos um portal de notícias genérico. Focamos na qualidade da informação e na estética visual que o destino merece.</p>
              </div>
              <div className="border border-border p-10">
                <h3 className="font-display text-2xl font-bold mb-4">Independência SOBI</h3>
                <p className="text-sm text-muted-foreground">Este é um projeto solo da SOBI DIGITAL, focado em criar o melhor guia editorial do cerrado brasileiro.</p>
              </div>
            </div>

            <div className="p-12 bg-secondary text-center">
              <h2 className="font-display text-3xl mb-6">Explore o Portal</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/onde-ficar">
                  <Button variant="outline" className="rounded-none font-bold uppercase tracking-widest px-8">Onde Ficar</Button>
                </Link>
                <Link to="/pousadas">
                  <Button variant="outline" className="rounded-none font-bold uppercase tracking-widest px-8">Pousadas</Button>
                </Link>
                <Link to="/roteiros">
                  <Button variant="outline" className="rounded-none font-bold uppercase tracking-widest px-8">Roteiros</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <PortalFooter />
    </div>
  );
}
