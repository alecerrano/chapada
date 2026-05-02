import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import cachoeiraImg from "@/assets/cachoeira.jpg";

export const Route = createFileRoute("/cavalcante")({
  component: CidadePage,
});

function CidadePage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img src={cachoeiraImg} className="absolute inset-0 h-full w-full object-cover brightness-50" />
        <h1 className="relative z-10 font-display text-6xl text-white font-medium uppercase tracking-tighter">Cavalcante</h1>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-24">
        <div className="prose prose-stone max-w-none">
          <p className="text-xl leading-relaxed text-muted-foreground mb-12">Cavalcante guarda os segredos mais profundos da Chapada, incluindo a comunidade Kalunga e a Santa Bárbara.</p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display text-2xl font-bold mb-4">Vantagens</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Cachoeiras selvagens e pouco exploradas</li>
                <li>• Imersão cultural Kalunga</li>
                <li>• Contemplação e silêncio absoluto</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold mb-4">Atenção</h3>
              <p className="text-sm text-muted-foreground">Distância maior das outras bases; estrada longa.</p>
            </div>
          </div>
        </div>

        <div className="mt-24 p-12 bg-secondary text-center">
          <h2 className="font-display text-3xl mb-8">Hospedagem em Cavalcante</h2>
          <Link to="/pousadas">
            <Button size="lg" className="rounded-none px-12 py-7 font-bold uppercase tracking-widest">Ver pousadas</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
