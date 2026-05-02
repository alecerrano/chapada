import { createFileRoute, Link } from "@tanstack/react-router";
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
    <div className="min-h-screen bg-background text-foreground py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="font-display text-4xl md:text-6xl font-medium mb-12 leading-tight">
          Onde ficar na Chapada dos Veadeiros: Alto Paraíso, São Jorge ou Cavalcante?
        </h1>
        
        <div className="prose prose-stone max-w-none">
          <p className="text-xl leading-relaxed text-muted-foreground mb-12">
            Escolher a base certa na Chapada dos Veadeiros é o primeiro passo para uma viagem inesquecível. Cada região oferece uma atmosfera distinta e acesso a diferentes atrativos.
          </p>

          <h2 className="font-display text-3xl mt-16 mb-8">Comparativo entre as regiões</h2>
          <div className="border border-border my-8">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold uppercase text-[10px] tracking-widest">Região</TableHead>
                  <TableHead className="font-bold uppercase text-[10px] tracking-widest">Melhor para</TableHead>
                  <TableHead className="font-bold uppercase text-[10px] tracking-widest">Pontos fortes</TableHead>
                  <TableHead className="font-bold uppercase text-[10px] tracking-widest">Pontos de atenção</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparativo.map(row => (
                  <TableRow key={row.regiao}>
                    <TableCell className="font-bold">{row.regiao}</TableCell>
                    <TableCell>{row.melhor}</TableCell>
                    <TableCell>{row.pontosFortes}</TableCell>
                    <TableCell>{row.pontosAtencao}</TableCell>
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

          <div className="mt-24 p-12 bg-secondary text-center">
            <h2 className="font-display text-3xl mb-6">Pronto para escolher sua pousada?</h2>
            <Link to="/pousadas">
              <Button size="lg" className="rounded-none px-12 py-7 uppercase tracking-widest font-bold">
                Ver todas as pousadas
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
