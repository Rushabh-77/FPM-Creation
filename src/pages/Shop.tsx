import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

const Shop = () => (
  <section className="container py-12 md:py-16">
    <div className="text-center max-w-2xl mx-auto mb-10">
      <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Our Collection</p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold mt-3">Shop Affordable Luxury</h1>
      <p className="text-muted-foreground mt-3">Frames, keychains, idols & gifts — handpicked for every Indian celebration.</p>
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {products.map((p) => <ProductCard key={p.id} product={p} />)}
    </div>
  </section>
);

export default Shop;
