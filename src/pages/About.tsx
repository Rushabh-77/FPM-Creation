import { Heart, Sparkles, Award, Users } from "lucide-react";

const About = () => (
  <>
    <section className="bg-hero">
      <div className="container py-16 md:py-24 text-center max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Our Story</p>
        <h1 className="font-serif text-5xl md:text-6xl font-semibold mt-3">
          Crafted with <span className="text-gold italic">heart</span>, gifted with <span className="text-gold italic">pride</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          FPM Creation is your destination for beautifully crafted personalized gifts and modern home décor. We create custom name piggy banks, keychains, decorative flower vases, and unique gift items designed to make every occasion memorable. With a focus on quality, creativity, and customer satisfaction, we turn your ideas into products you'll love to gift and display.
        </p>
      </div>
    </section>

  </>
);

export default About;
