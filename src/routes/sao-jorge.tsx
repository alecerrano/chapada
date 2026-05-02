import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sao-jorge")({
  component: () => <div className="p-24 text-center">Página São Jorge em construção</div>,
});
