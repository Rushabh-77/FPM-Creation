import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles, Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { waLink } from "@/lib/site";

const heroSlides = products.map((product) => product.image);

const Home = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-hero overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-10 items-center py-16 lg:py-24">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 bg-accent text-accent-foreground border border-primary/20 px-3 py-1.5 rounded-full text-xs font-semibold">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              New Festive Collection 2026
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] mt-5">
              Gifts that feel <span className="text-gold italic">precious</span>,<br />
              priced to <span className="text-gold italic">delight</span>.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-lg">
              Handpicked frames, personalised keychains, decorative vases & curated hampers — affordable luxury, delivered across India.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <Link to="/shop">
                <Button variant="gold" size="xl">
                  Shop the Collection <ArrowRight className="ml-1" />
                </Button>
              </Link>
              <a href={waLink("Hi FPM Creation, I want to place an order!")} target="_blank" rel="noreferrer">
                <Button variant="whatsapp" size="xl">
                  <MessageCircle /> DM to Order
                </Button>
              </a>
            </div>

          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="absolute -inset-6 bg-gold opacity-10 blur-3xl rounded-full" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-elegant">
              {heroSlides.map((image, index) => (
                <img
                  key={`${image}-${index}`}
                  src={image}
                  alt={`FPM Creation product showcase ${index + 1}`}
                  width={1600}
                  height={1200}
                  className={`absolute inset-0 h-full w-full object-cover animate-float transition-opacity duration-700 ${index === activeImageIndex ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show product image ${index + 1}`}
                  onClick={() => setActiveImageIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${index === activeImageIndex ? "w-8 bg-gold" : "w-2.5 bg-white/70"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES / PRODUCTS */}
      <section className="container py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Bestsellers</p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mt-3">Loved by thousands across India</h2>
          <p className="text-muted-foreground mt-3">From wedding gifts to everyday décor — discover our most-loved pieces.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Array.from(new Set(products.map((product) => product.category))).map((category) => (
            <Button key={category} asChild variant="secondary" size="sm">
              <Link to={`/shop?category=${encodeURIComponent(category)}`}>{category}</Link>
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
        <div className="text-center mt-10">
          <Link to="/shop">
            <Button variant="outlineGold" size="lg">View All Products <ArrowRight /></Button>
          </Link>
        </div>
      </section>

      {/* WHY FPM */}
      <section className="bg-soft py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Why FPM</p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mt-3">Luxury you can trust</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Truck, title: "Pan-India Delivery", desc: "Quick & safely packed shipping to every pincode." },
              { icon: ShieldCheck, title: "Secure & Trusted", desc: "12,000+ orders fulfilled with 4.9★ average rating." },
              { icon: MessageCircle, title: "WhatsApp Support", desc: "Real humans, real fast. DM us anytime to order." },
            ].map((f) => (
              <div key={f.title} className="bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-smooth">
                <div className="h-12 w-12 rounded-xl bg-gold flex items-center justify-center text-primary-foreground mb-4">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl mb-1.5">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gold text-primary-foreground p-10 md:p-16 text-center shadow-elegant">
          <Sparkles className="absolute top-6 left-6 h-8 w-8 opacity-30" />
          <Sparkles className="absolute bottom-6 right-6 h-12 w-12 opacity-30" />
          <h2 className="font-serif text-4xl md:text-5xl font-semibold">Make every gift unforgettable</h2>
          <p className="mt-3 max-w-xl mx-auto opacity-95">Chat with us on WhatsApp and let our team help you pick the perfect gift.</p>
          <a href={waLink("Hi FPM Creation, please help me pick a gift!")} target="_blank" rel="noreferrer" className="inline-block mt-6">
            <Button variant="secondary" size="xl" className="font-semibold">
              <MessageCircle /> Chat on WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
