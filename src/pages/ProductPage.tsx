import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, BadgeIndianRupee, Check, MessageCircle, ShieldCheck, Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { waLink } from "@/lib/site";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id) ?? products[0];
  const off = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);
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
    <section className="container py-10">
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to shop
      </Link>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        <div className="bg-secondary rounded-3xl overflow-hidden shadow-soft">
          <div className="relative aspect-square">
            {images.map((image, index) => (
              <img
                key={`${product.id}-${image}`}
                src={image}
                alt={product.name}
                className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ${index === activeImageIndex ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>
          {images.length > 1 && (
            <div className="flex justify-center gap-2 px-4 pb-4 pt-2">
              {images.map((_, index) => (
                <button
                  key={`${product.id}-detail-dot-${index}`}
                  type="button"
                  aria-label={`Show image ${index + 1}`}
                  onClick={() => setActiveImageIndex(index)}
                  className={`h-2 rounded-full transition-all ${index === activeImageIndex ? "w-6 bg-gold" : "w-2 bg-muted-foreground/40"}`}
                />
              ))}
            </div>
          )}
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">{product.category}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mt-2">{product.name}</h1>

          <div className="flex items-baseline gap-3 mt-6">
            <span className="text-4xl font-bold">₹{product.price}</span>
            <span className="text-lg text-muted-foreground line-through">₹{product.mrp}</span>
            <span className="bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded-md">{off}% OFF</span>
          </div>
          <p className="mt-6 text-foreground/85 leading-relaxed">{product.description}</p>

          <ul className="mt-6 space-y-2 text-sm">
            {["Premium materials & finish", "Gift-ready packaging", "Easy returns within 7 days"].map((b) => (
              <li key={b} className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> {b}</li>
            ))}
          </ul>

          <div className="grid sm:grid-cols-2 gap-3 mt-8">
            <a href={waLink(`Hi FPM Creation, I want to order: ${product.name} (₹${product.price})`)} target="_blank" rel="noreferrer">
              <Button variant="whatsapp" size="xl" className="w-full">
                <MessageCircle /> DM to Order
              </Button>
            </a>
            <a href={waLink(`Hi FPM Creation, I want to order: ${product.name} (₹${product.price})`)} target="_blank" rel="noreferrer">
              <Button variant="gold" size="xl" className="w-full">
                <BadgeIndianRupee /> Order Now
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-8 pt-8 border-t border-border">
            {[
              { icon: Truck, label: "Free over ₹999" },
              { icon: ShieldCheck, label: "Secure Order" },
            ].map((f) => (
              <div key={f.label} className="text-center">
                <f.icon className="h-5 w-5 text-primary mx-auto mb-1" />
                <p className="text-xs font-medium">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related */}
      <div className="mt-20">
        <h2 className="font-serif text-3xl font-semibold mb-6">You may also love</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {related.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
