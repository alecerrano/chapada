import { Link } from "@tanstack/react-router";

export const PortalFooter = () => (
  <footer className="border-t border-border bg-background py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <Link to="/" className="flex flex-col">
            <span className="font-display text-2xl font-black tracking-tighter uppercase leading-none">
              Chapada dos Veadeiros
            </span>
            <span className="font-display text-lg font-light tracking-[0.3em] uppercase leading-none text-primary">
              Online
            </span>
          </Link>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
            Onde ficar, o que fazer e como viver melhor a Chapada. Curadoria editorial para quem busca beleza e intenção em cada jornada.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-x-12 gap-y-12 md:grid-cols-3">
          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground">Destinos</h4>
            <div className="flex flex-col gap-4">
              <Link to="/alto-paraiso" className="text-xs text-muted-foreground transition-colors hover:text-primary">Alto Paraíso</Link>
              <Link to="/sao-jorge" className="text-xs text-muted-foreground transition-colors hover:text-primary">São Jorge</Link>
              <Link to="/cavalcante" className="text-xs text-muted-foreground transition-colors hover:text-primary">Cavalcante</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground">Conteúdo</h4>
            <div className="flex flex-col gap-4">
              <Link to="/pousadas" className="text-xs text-muted-foreground transition-colors hover:text-primary">Pousadas</Link>
              <Link to="/roteiros" className="text-xs text-muted-foreground transition-colors hover:text-primary">Roteiros</Link>
              <Link to="/experiencias" className="text-xs text-muted-foreground transition-colors hover:text-primary">Experiências</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground">Institucional</h4>
            <div className="flex flex-col gap-4">
              <Link to="/sobre" className="text-xs text-muted-foreground transition-colors hover:text-primary">Sobre</Link>
              <Link to="/para-pousadas" className="text-xs text-muted-foreground transition-colors hover:text-primary">Para Pousadas</Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-24 border-t border-border pt-12">
        <div className="mb-8 max-w-2xl text-[10px] leading-relaxed text-muted-foreground/60 uppercase tracking-widest">
          As informações publicadas no Chapada dos Veadeiros Online têm caráter editorial e informativo. Regras, valores, horários e condições de acesso podem mudar. Sempre confirme detalhes diretamente com atrações, guias, pousadas ou fontes oficiais antes da viagem.
        </div>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground/40">
            © {new Date().getFullYear()} CHAPADA DOS VEADEIROS ONLINE. TODOS OS DIREITOS RESERVADOS.
          </p>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground/40">
            Um projeto <span className="font-bold text-foreground/80">SOBI DIGITAL</span>.
          </p>
        </div>
      </div>
    </div>
  </footer>
);
