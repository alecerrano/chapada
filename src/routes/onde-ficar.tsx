import { createFileRoute, Link } from "@tanstack/react-router";
import { PortalHeader } from "@/components/portal/PortalHeader";
import { PortalFooter } from "@/components/portal/PortalFooter";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/onde-ficar")({
  component: OndeFicar,
  head: () => ({
    meta: [
      { title: "Onde ficar na Chapada dos Veadeiros: Alto Paraíso, São Jorge ou Cavalcante?" },
    ],
  }),
});

function OndeFicar() {
  const comparativo = [
    { regiao: "Alto Paraíso", melhor: "Estrutura e facilidade", pontosFortes: "Restaurantes, bancos, comércios, acessos", pontosAtencao: "Pode ser mais movimentado/urbano" },
    { regiao: "São Jorge", melhor: "Vila e Parque Nacional", pontosFortes: "Charme rústico, pé na areia, trilhas a pé", pontosAtencao: "Estrada de terra (parcial), menor estrutura" },
    { regiao: "Cavalcante", melhor: "Natureza profunda", pontosFortes: "Santa Bárbara, autenticidade, paz", pontosAtencao: "Mais distante, estrutura básica" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-primary/10">
      <PortalHeader />
      <main className="pt-48 pb-32">
        <div className="mx-auto max-w-[90rem] px-8 lg:px-16">
          <div className="max-w-4xl mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary/40 mb-10 block">Logística Editorial</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[7rem] font-medium mb-12 leading-[1.05] tracking-tighter">
              Alto Paraíso, São Jorge ou Cavalcante?
            </h1>
            <p className="text-2xl leading-relaxed text-muted-foreground font-light max-w-2xl">
              Escolher a base certa na Chapada dos Veadeiros é o primeiro passo para uma jornada com intenção. Cada região dita um ritmo diferente.
            </p>
          </div>
          
          <div className="prose prose-stone max-w-none prose-xl prose-headings:font-display prose-headings:font-medium prose-p:font-light">
            <div className="border border-border my-24 overflow-hidden shadow-sm">
              <Table>
                <TableHeader>
                  <TableRow className="bg-secondary/50 border-b border-border">
                    <TableHead className="font-black uppercase text-[10px] tracking-[0.3em] px-10 py-8 text-foreground">Região</TableHead>
                    <TableHead className="font-black uppercase text-[10px] tracking-[0.3em] px-10 py-8 text-foreground">Melhor para</TableHead>
                    <TableHead className="font-black uppercase text-[10px] tracking-[0.3em] px-10 py-8 text-foreground">Pontos fortes</TableHead>
                    <TableHead className="font-black uppercase text-[10px] tracking-[0.3em] px-10 py-8 text-foreground">Pontos de atenção</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparativo.map(row => (
                    <TableRow key={row.regiao} className="border-b border-border last:border-0 hover:bg-secondary/20 transition-colors">
                      <TableCell className="font-display text-2xl font-bold px-10 py-10 tracking-tight">{row.regiao}</TableCell>
                      <TableCell className="px-10 py-10 font-medium">{row.melhor}</TableCell>
                      <TableCell className="px-10 py-10 text-muted-foreground leading-relaxed">{row.pontosFortes}</TableCell>
                      <TableCell className="px-10 py-10 text-muted-foreground leading-relaxed italic">{row.pontosAtencao}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="max-w-3xl mx-auto py-24">
              <h2 className="text-5xl mb-12 tracking-tight">Melhor região por perfil</h2>
              <div className="grid gap-16">
                 <div className="border-l-[1px] border-primary pl-10">
                   <h4 className="text-xl font-bold uppercase tracking-widest mb-4">Primeira viagem</h4>
                   <p className="text-muted-foreground">Alto Paraíso ou São Jorge são ideais pela facilidade de acesso aos principais atrativos e maior variedade de serviços básicos.</p>
                 </div>
                 <div className="border-l-[1px] border-primary pl-10">
                   <h4 className="text-xl font-bold uppercase tracking-widest mb-4">Viagem de Casal</h4>
                   <p className="text-muted-foreground">São Jorge oferece o charme das ruas de areia e jantares à luz de velas, enquanto Alto Paraíso dispõe de lofts modernos e isolados.</p>
                 </div>
                 <div className="border-l-[1px] border-primary pl-10">
                   <h4 className="text-xl font-bold uppercase tracking-widest mb-4">Santa Bárbara</h4>
                   <p className="text-muted-foreground">Se o seu foco principal é a cachoeira mais azul do Brasil, hospedar-se em Cavalcante é essencial para evitar horas de estrada.</p>
                 </div>
              </div>
            </div>

            <div className="mt-32 p-24 bg-primary text-primary-foreground text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-white/5 skew-x-12 translate-x-1/4" />
              <div className="relative z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-8 block">Seleção SOBI</span>
                <h2 className="font-display text-5xl md:text-7xl mb-12 text-white tracking-tighter italic">Pronto para escolher?</h2>
                <Link to="/pousadas">
                  <Button size="lg" className="bg-white text-black hover:bg-accent rounded-none px-16 py-10 text-[10px] font-bold uppercase tracking-[0.3em] transition-all">
                    Explorar Curadoria de Pousadas
                  </Button>
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
