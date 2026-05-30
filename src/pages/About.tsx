import { Heart, Sparkles, Award, Users } from "lucide-react";
import hero from "@/assets/hero.jpg";

const About = () => (
  <>
    <section className="bg-hero">
      <div className="container py-16 md:py-24 text-center max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Our Story</p>
        <h1 className="font-serif text-5xl md:text-6xl font-semibold mt-3">
          Crafted with <span className="text-gold italic">heart</span>, gifted with <span className="text-gold italic">pride</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          FPM Creation began with a simple belief — every Indian deserves to gift something beautiful, without overspending. From our small studio to homes across the country, we curate luxury that feels personal.
        </p>
      </div>
    </section>

    <section className="container py-20 grid lg:grid-cols-2 gap-12 items-center">
      <img src={hero} alt="FPM Creation studio" className="rounded-3xl shadow-elegant w-full object-cover" loading="lazy" />
      <div>
        <h2 className="font-serif text-4xl font-semibold">A boutique of little luxuries</h2>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          What started as handmade keychains for friends has grown into a full collection of decorative frames, blessed dashboard idols and curated gift hampers — loved by 12,000+ customers across India.
        </p>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          Every piece is hand-checked, beautifully packaged, and delivered with Cash on Delivery — because trust matters as much as taste.
        </p>
      </div>
    </section>

    <section className="bg-soft py-20">
      <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Users, n: "12,000+", l: "Happy Customers" },
          { icon: Heart, n: "4.9★", l: "Average Rating" },
          { icon: Award, n: "500+", l: "5-Star Reviews" },
          { icon: Sparkles, n: "Pan-India", l: "Delivery & COD" },
        ].map((s) => (
          <div key={s.l} className="text-center bg-card border border-border rounded-2xl p-6 shadow-soft">
            <s.icon className="h-7 w-7 text-primary mx-auto" />
            <p className="font-serif text-4xl font-semibold mt-3 text-gold">{s.n}</p>
            <p className="text-sm text-muted-foreground mt-1">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default About;
