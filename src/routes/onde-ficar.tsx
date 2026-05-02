import { createFileRoute, Link } from "@tanstack/react-router";
import { PortalHeader } from "@/components/portal/PortalHeader";
import { PortalFooter } from "@/components/portal/PortalFooter";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
    <div className="min-h-screen bg-background text-foreground font-body">
      <PortalHeader />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="font-display text-4xl md:text-6xl font-medium mb-12 leading-tight">
            Onde ficar na Chapada dos Veadeiros: Alto Paraíso, São Jorge ou Cavalcante?
          </h1>
          
          <div className="prose prose-stone max-w-none prose-lg">
            <p className="text-xl leading-relaxed text-muted-foreground mb-12">
              Escolher a base certa na Chapada dos Veadeiros é o primeiro passo para uma viagem inesquecível. Cada região oferece uma atmosfera distinta e acesso a diferentes atrativos.
            </p>

            <h2 className="font-display text-3xl mt-16 mb-8 font-medium">Comparativo entre as regiões</h2>
            <div className="border border-border my-8 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-secondary/50">
                    <TableHead className="font-bold uppercase text-[10px] tracking-widest px-6 py-4">Região</TableHead>
                    <TableHead className="font-bold uppercase text-[10px] tracking-widest px-6 py-4">Melhor para</TableHead>
                    <TableHead className="font-bold uppercase text-[10px] tracking-widest px-6 py-4">Pontos fortes</TableHead>
                    <TableHead className="font-bold uppercase text-[10px] tracking-widest px-6 py-4">Pontos de atenção</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparativo.map(row => (
                    <TableRow key={row.regiao}>
                      <TableCell className="font-bold px-6 py-4">{row.regiao}</TableCell>
                      <TableCell className="px-6 py-4">{row.melhor}</TableCell>
                      <TableCell className="px-6 py-4">{row.pontosFortes}</TableCell>
                      <TableCell className="px-6 py-4">{row.pontosAtencao}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="grid gap-12 mt-16">
              <section>
                <h3 className="font-display text-2xl font-bold mb-4">Melhor região por perfil</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li><strong>Primeira viagem:</strong> Alto Paraíso ou São Jorge são ideais pela facilidade de acesso aos principais atrativos.</li>
                  <li><strong>Casal:</strong> São Jorge pelo charme da vila ou pousadas isoladas em Alto Paraíso.</li>
                  <li><strong>Santa Bárbara:</strong> Cavalcante é a única base viável para visitar a cachoeira mais famosa sem longos deslocamentos.</li>
                </ul>
              </section>
            </div>

            <div className="mt-24 p-12 bg-primary text-primary-foreground text-center">
              <h2 className="font-display text-3xl mb-6 text-white">Pronto para escolher sua pousada?</h2>
              <Link to="/pousadas">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-none px-12 py-7 uppercase tracking-widest font-bold">
                  Ver todas as pousadas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <PortalFooter />
    </div>
  );
}
