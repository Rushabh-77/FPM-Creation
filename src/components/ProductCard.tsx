import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import type { Product } from "@/lib/site";

export const ProductCard = ({ product }: { product: Product }) => {
  const off = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-card border border-border rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth flex flex-col"
    >
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover group-hover:scale-105 transition-smooth duration-700"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-gold text-primary-foreground text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full shadow-soft">
            {product.badge}
          </span>
        )}
        <span className="absolute top-3 right-3 bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded-md">
          {off}% OFF
        </span>
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <p className="text-[11px] uppercase tracking-wider text-primary font-semibold">{product.category}</p>
        <h3 className="font-serif text-xl leading-tight line-clamp-2">{product.name}</h3>
        <div className="flex items-center gap-1 text-xs">
          <Star className="h-3.5 w-3.5 fill-primary text-primary" />
          <span className="font-semibold">{product.rating}</span>
          <span className="text-muted-foreground">({product.reviews})</span>
        </div>
        <div className="flex items-baseline gap-2 mt-auto pt-2">
          <span className="text-xl font-bold">₹{product.price}</span>
          <span className="text-sm text-muted-foreground line-through">₹{product.mrp}</span>
        </div>
      </div>
    </Link>
  );
};
