import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sobre")({
  component: () => <div className="p-24 text-center">Página Sobre em construção</div>,
});
