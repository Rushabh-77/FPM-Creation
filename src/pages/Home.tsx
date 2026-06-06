import { Link } from "react-router-dom";
import { ArrowRight, BadgeIndianRupee, MessageCircle, ShieldCheck, Sparkles, Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { waLink } from "@/lib/site";
import hero from "@/assets/hero.jpg";

const Home = () => {
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
              Handpicked frames, personalised keychains, dashboard idols & curated hampers — affordable luxury, delivered across India with Cash on Delivery.
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

            <div className="flex flex-wrap items-center gap-5 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                <span className="font-semibold text-foreground">4.9</span>
                <span>· 12,000+ happy customers</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="absolute -inset-6 bg-gold opacity-10 blur-3xl rounded-full" />
            <img
              src={hero}
              alt="FPM Creation luxury gift collection — frames, idols and keychains"
              width={1600}
              height={1200}
              className="relative rounded-3xl shadow-elegant w-full object-cover animate-float"
            />
            <div className="absolute -bottom-6 -left-4 sm:left-6 bg-card border border-border rounded-2xl px-4 py-3 shadow-elegant flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gold flex items-center justify-center text-primary-foreground">
                <BadgeIndianRupee className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Today only</p>
                <p className="font-bold text-sm">Flat ₹50 OFF — FPM50</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES / PRODUCTS */}
      <section className="container py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Bestsellers</p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mt-3">Loved by thousands across India</h2>
          <p className="text-muted-foreground mt-3">From wedding gifts to dashboard blessings — discover our most-loved pieces.</p>
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
              { icon: BadgeIndianRupee, title: "Cash on Delivery", desc: "Order with confidence — pay only when it reaches your doorstep." },
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

      {/* TESTIMONIALS */}
      <section className="container py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Happy Customers</p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mt-3">Real stories, real smiles</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Priya S.", city: "Mumbai", text: "The frame quality is stunning! Looks 10x more expensive than what I paid. Got it for my parents' anniversary 💕" },
            { name: "Rahul M.", city: "Delhi", text: "Ordered the Ganesha idol for my new car. Beautiful finish and quick COD delivery. Highly recommend!" },
            { name: "Anjali K.", city: "Bengaluru", text: "Personalised keychains were a hit at my sister's wedding. Packaging was so premium — felt like a luxury brand." },
          ].map((t) => (
            <div key={t.name} className="bg-card border border-border rounded-2xl p-6 shadow-soft">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
              </div>
              <p className="text-foreground/90 italic">"{t.text}"</p>
              <p className="mt-4 text-sm font-semibold">{t.name} <span className="text-muted-foreground font-normal">· {t.city}</span></p>
            </div>
          ))}
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
