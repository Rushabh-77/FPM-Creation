import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") ?? "All";

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(products.map((product) => product.category)))],
    [],
  );

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <section className="container py-12 md:py-16">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Our Collection</p>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold mt-3">Shop Affordable Luxury</h1>
        <p className="text-muted-foreground mt-3">
          Frames, keychains, idols & gifts — handpicked for every Indian celebration.
        </p>
      </div>

      <div className="flex flex-col gap-3 items-center justify-center mb-10">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === selectedCategory ? "gold" : "secondary"}
              size="sm"
              onClick={() => setSearchParams(category === "All" ? {} : { category })}
            >
              {category}
            </Button>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          Showing {filteredProducts.length} product{filteredProducts.length === 1 ? "" : "s"}
          {selectedCategory !== "All" ? ` for ${selectedCategory}` : ""}
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default Shop;
