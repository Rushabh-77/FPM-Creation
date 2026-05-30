import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SITE, waLink } from "@/lib/site";
import { toast } from "sonner";

const Contact = () => {
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const msg = `Hi FPM Creation!%0AName: ${data.get("name")}%0APhone: ${data.get("phone")}%0AMessage: ${data.get("message")}`;
    window.open(`https://wa.me/${SITE.whatsapp}?text=${msg}`, "_blank");
    toast.success("Opening WhatsApp to send your message...");
  };

  return (
    <>
      <section className="bg-hero">
        <div className="container py-16 text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Get In Touch</p>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold mt-3">We'd love to <span className="text-gold italic">hear from you</span></h1>
          <p className="mt-4 text-muted-foreground">Questions, custom orders or bulk gifting — DM us on WhatsApp for the fastest reply.</p>
        </div>
      </section>

      <section className="container py-16 grid lg:grid-cols-2 gap-10">
        <div className="space-y-5">
          {[
            { icon: MessageCircle, title: "WhatsApp (Fastest)", value: SITE.phone, href: waLink("Hi FPM Creation!") },
            { icon: Phone, title: "Call Us", value: SITE.phone, href: `tel:${SITE.phone}` },
            { icon: Mail, title: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
            { icon: Instagram, title: "Instagram DM", value: "@fpmcreation", href: SITE.instagram },
            { icon: MapPin, title: "Studio", value: "Made & shipped from India", href: "#" },
          ].map((c) => (
            <a key={c.title} href={c.href} target="_blank" rel="noreferrer"
               className="flex items-center gap-4 bg-card border border-border rounded-2xl p-5 shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-smooth">
              <div className="h-12 w-12 rounded-xl bg-gold flex items-center justify-center text-primary-foreground shrink-0">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">{c.title}</p>
                <p className="text-sm text-muted-foreground">{c.value}</p>
              </div>
            </a>
          ))}
        </div>

        <form onSubmit={submit} className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-elegant space-y-4">
          <h2 className="font-serif text-3xl font-semibold">Send us a message</h2>
          <p className="text-sm text-muted-foreground -mt-2">We'll redirect you to WhatsApp to send instantly.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required placeholder="Your name" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" required placeholder="+91 ..." className="mt-1.5" />
            </div>
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" required placeholder="Tell us what you're looking for..." rows={5} className="mt-1.5" />
          </div>
          <Button type="submit" variant="gold" size="lg" className="w-full">
            <MessageCircle /> Send via WhatsApp
          </Button>
        </form>
      </section>
    </>
  );
};

export default Contact;
