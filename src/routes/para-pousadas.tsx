import { createFileRoute, Link } from "@tanstack/react-router";
import { PortalHeader } from "@/components/portal/PortalHeader";
import { PortalFooter } from "@/components/portal/PortalFooter";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/para-pousadas")({
  component: ParaPousadas,
});

function ParaPousadas() {
  const formatos = [
    {
      title: "Destaque Local",
      desc: "Ideal para visibilidade estratégica em páginas específicas.",
      items: ["Card em página de cidade", "Menção em artigo relacionado", "Botão direto para WhatsApp"]
    },
    {
      title: "Página Editorial",
      desc: "Conteúdo rico para máxima conversão e autoridade.",
      items: ["Página completa da pousada", "Galeria premium", "Diferenciais e localização"]
    },
    {
      title: "Presença Premium",
      desc: "A maior autoridade que uma marca pode ter no portal.",
      items: ["Destaque na home", "Destaque em artigos", "Menção em roteiros", "Relatório mensal"]
    },
    {
      title: "Portal + Site Próprio",
      desc: "Solução completa de presença digital SOBI DIGITAL.",
      items: ["Página no portal", "Site próprio profissional", "SEO local completo", "Acompanhamento mensal"]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      <PortalHeader />
      <main className="pt-40 pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="font-display text-4xl md:text-6xl font-medium mb-8 leading-tight">
            Sua pousada pode ser encontrada por quem está planejando a Chapada.
          </h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed italic font-light">
            O Chapada dos Veadeiros Online conecta hospedagens, experiências e serviços locais a viajantes que buscam clareza e beleza no cerrado.
          </p>
          
          <Button size="lg" className="rounded-none px-12 py-8 font-bold uppercase tracking-widest bg-primary hover:bg-primary/90">
            Falar com a SOBI DIGITAL
          </Button>

          <section className="mt-32">
            <h2 className="font-display text-3xl font-medium mb-12 uppercase tracking-tighter">Formatos de parceria</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {formatos.map(f => (
                <div key={f.title} className="border border-border p-10 bg-white hover:border-primary transition-colors shadow-sm">
                  <h3 className="font-display text-2xl font-bold mb-4 leading-tight">{f.title}</h3>
                  <p className="text-sm text-muted-foreground mb-8 leading-relaxed">{f.desc}</p>
                  <ul className="space-y-4">
                    {f.items.map(item => (
                      <li key={item} className="flex items-center gap-4 text-xs font-medium tracking-wide">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <PortalFooter />
    </div>
  );
}
