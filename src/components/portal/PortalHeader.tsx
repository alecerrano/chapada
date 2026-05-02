import { Link } from "@tanstack/react-router";

export const PortalHeader = () => (
  <nav className="fixed inset-x-0 top-0 z-50 bg-background/95 py-6 shadow-sm backdrop-blur-md">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
      <Link to="/" className="flex flex-col">
        <span className="font-display text-lg font-black tracking-tighter uppercase leading-none md:text-xl">Chapada dos Veadeiros</span>
        <span className="font-display text-sm font-light tracking-[0.3em] uppercase leading-none text-primary">Online</span>
      </Link>
      <div className="hidden xl:flex items-center gap-8">
        {["Onde Ficar", "Pousadas", "Roteiros", "Cachoeiras", "Experiências"].map(i => (
          <Link key={i} to={`/${i.toLowerCase().replace(" ", "-")}`} className="text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors">
            {i}
          </Link>
        ))}
      </div>
    </div>
  </nav>
);
