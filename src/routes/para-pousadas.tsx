import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/para-pousadas")({
  component: ParaPousadas,
});

function ParaPousadas() {
  const formatos = [
    {
      title: "Destaque Local",
      desc: "Ideal para visibilidade estratégica.",
      items: ["Card em página de cidade", "Menção em artigo relacionado", "Botão direto para WhatsApp"]
    },
    {
      title: "Página Editorial",
      desc: "Conteúdo rico para conversão.",
      items: ["Página completa da pousada", "Galeria premium", "Diferenciais e localização"]
    },
    {
      title: "Presença Premium",
      desc: "Autoridade máxima no portal.",
      items: ["Destaque na home", "Destaque em artigos", "Menção em roteiros", "Relatório mensal"]
    },
    {
      title: "Portal + Site Próprio",
      desc: "Solução completa SOBI DIGITAL.",
      items: ["Página no portal", "Site próprio profissional", "SEO local completo", "Acompanhamento mensal"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="font-display text-4xl md:text-5xl font-medium mb-6">Sua pousada pode ser encontrada por quem está planejando a Chapada.</h1>
        <p className="text-xl text-muted-foreground mb-12">O Chapada dos Veadeiros Online conecta hospedagens, experiências e serviços locais a viajantes que estão pesquisando onde ficar, o que fazer e como viver melhor a Chapada dos Veadeiros.</p>
        
        <Button size="lg" className="rounded-none px-8 py-7 font-bold uppercase tracking-widest">
          Falar com a SOBI DIGITAL
        </Button>

        <section className="mt-24">
          <h2 className="font-display text-3xl font-medium mb-12">Formatos de parceria</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {formatos.map(f => (
              <div key={f.title} className="border border-border p-8 hover:border-primary transition-colors">
                <h3 className="font-display text-2xl font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">{f.desc}</p>
                <ul className="space-y-3">
                  {f.items.map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
