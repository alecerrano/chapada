import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/roteiros")({
  component: () => <div className="p-24 text-center">Página Roteiros em construção</div>,
});
