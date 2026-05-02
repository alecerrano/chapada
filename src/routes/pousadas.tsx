import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pousadas")({
  component: () => <div className="p-24 text-center">Página Pousadas em construção</div>,
});
