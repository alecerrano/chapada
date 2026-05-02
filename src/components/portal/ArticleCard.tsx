import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

interface ArticleCardProps {
  title: string;
  category: string;
  slug: string;
}

export const ArticleCard = ({ title, category, slug }: ArticleCardProps) => (
  <Link 
    to={`/guia/${slug}` as any} 
    className="group flex flex-col gap-6 bg-background p-10 shadow-sm transition-all hover:shadow-md border border-border"
  >
    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60">{category}</div>
    <h3 className="font-display text-2xl font-bold leading-tight transition-colors group-hover:text-primary">
      {title}
    </h3>
    <div className="mt-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
      Ler guia completo <ArrowRight className="h-3 w-3" />
    </div>
  </Link>
);
