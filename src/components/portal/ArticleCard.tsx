import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

interface ArticleCardProps {
  title: string;
  category: string;
  slug: string;
  subtitle?: string;
}

export const ArticleCard = ({ title, category, slug, subtitle }: ArticleCardProps) => (
  <Link 
    to={`/guia/${slug}` as any} 
    className="group relative flex flex-col gap-8 bg-background p-12 transition-all duration-500 border border-border hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
  >
    <div className="flex flex-col gap-6">
      <div className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-primary/40 group-hover:text-primary transition-colors">
        {category}
      </div>
      <h3 className="font-display text-3xl font-medium leading-[1.2] transition-colors group-hover:text-primary/90">
        {title}
      </h3>
      {subtitle && (
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 italic font-light">
          {subtitle}
        </p>
      )}
    </div>
    
    <div className="mt-auto flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] group-hover:gap-6 transition-all">
      Ler o guia <ArrowRight className="h-3 w-3 text-primary" />
    </div>
    
    <div className="absolute top-0 right-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-700" />
  </Link>
);
