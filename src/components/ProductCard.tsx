import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import type { Product } from "@/lib/site";

export const ProductCard = ({ product }: { product: Product }) => {
  const off = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  const images = product.images?.length ? product.images : [product.image];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => window.clearInterval(interval);
  }, [images.length]);

  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-card border border-border rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth flex flex-col"
    >
      <div className="relative aspect-square overflow-hidden bg-secondary">
        {images.map((image, index) => (
          <img
            key={`${product.id}-${image}`}
            src={image}
            alt={product.name}
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 group-hover:scale-105 transition-smooth ${index === activeImageIndex ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-gold text-primary-foreground text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full shadow-soft">
            {product.badge}
          </span>
        )}
        <span className="absolute top-3 right-3 bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded-md">
          {off}% OFF
        </span>
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, index) => (
              <span
                key={`${product.id}-dot-${index}`}
                className={`h-1.5 rounded-full transition-all ${index === activeImageIndex ? "w-4 bg-white" : "w-1.5 bg-white/70"}`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <p className="text-[11px] uppercase tracking-wider text-primary font-semibold">{product.category}</p>
        <h3 className="font-serif text-xl leading-tight line-clamp-2">{product.name}</h3>
        <div className="flex items-baseline gap-2 mt-auto pt-2">
          <span className="text-xl font-bold">₹{product.price}</span>
          <span className="text-sm text-muted-foreground line-through">₹{product.mrp}</span>
        </div>
      </div>
    </Link>
  );
};
