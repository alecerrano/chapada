import { Link } from "@tanstack/react-router";

export const PortalFooter = () => (
  <footer className="border-t border-border bg-background py-32 lg:py-48">
    <div className="mx-auto max-w-[90rem] px-8 lg:px-16">
      <div className="grid gap-24 lg:grid-cols-2">
        <div className="flex flex-col items-start">
          <Link to="/" className="flex flex-col mb-12">
            <span className="font-display text-2xl font-black tracking-tighter uppercase leading-none">
              Chapada dos Veadeiros
            </span>
            <span className="font-display text-lg font-light tracking-[0.4em] uppercase leading-none text-primary">
              Online
            </span>
          </Link>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground font-light mb-12">
            Onde ficar, o que fazer e como viver melhor a Chapada. Curadoria editorial premium desenhada para quem busca profundidade e beleza no Planalto Central.
          </p>
          <div className="flex flex-col gap-2">
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/40 mb-2">Contato Editorial</span>
             <a href="mailto:contato@chapadadosveadeiros.online" className="text-sm font-medium hover:text-primary transition-colors">contato@chapadadosveadeiros.online</a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-x-16 gap-y-16 md:grid-cols-3">
          <div className="flex flex-col gap-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground">Destinos</h4>
            <div className="flex flex-col gap-5">
              <Link to="/alto-paraiso" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">Alto Paraíso</Link>
              <Link to="/sao-jorge" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">São Jorge</Link>
              <Link to="/cavalcante" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">Cavalcante</Link>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground">Explorar</h4>
            <div className="flex flex-col gap-5">
              <Link to="/pousadas" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">Pousadas</Link>
              <Link to="/roteiros" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">Roteiros</Link>
              <Link to="/experiencias" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">Experiências</Link>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground">Institucional</h4>
            <div className="flex flex-col gap-5">
              <Link to="/sobre" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">Sobre</Link>
              <Link to="/para-pousadas" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">Para Pousadas</Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-32 border-t border-border pt-16">
        <div className="mb-12 max-w-3xl text-[9px] leading-loose text-muted-foreground/50 uppercase tracking-[0.2em] font-medium">
          Aviso Editorial: As informações publicadas no Chapada dos Veadeiros Online são de caráter informativo. Regras de acesso, valores e horários estão sujeitos a alterações pelas autoridades e operadores locais. Sempre verifique detalhes com fontes oficiais antes de sua jornada.
        </div>
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row border-t border-border/30 pt-10">
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-muted-foreground/30">
            © {new Date().getFullYear()} CHAPADA DOS VEADEIROS ONLINE. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex items-center gap-6">
             <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-muted-foreground/30 italic">Desenvolvido por</span>
             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/40">
               SOBI DIGITAL
             </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
