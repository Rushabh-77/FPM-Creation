import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, ShieldCheck, Truck, BadgeIndianRupee } from "lucide-react";
import { SITE } from "@/lib/site";

export const Footer = () => (
  <footer className="bg-soft border-t border-border mt-24">
    {/* Trust strip */}
    <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-b border-border">
      {[
        { icon: BadgeIndianRupee, title: "Cash on Delivery", desc: "Pay after you receive" },
        { icon: Truck, title: "Pan-India Shipping", desc: "Free above ₹999" },
        { icon: ShieldCheck, title: "Secure Checkout", desc: "100% safe ordering" },
        { icon: Instagram, title: "DM to Order", desc: "Quick WhatsApp support" },
      ].map((f) => (
        <div key={f.title} className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-full bg-gold flex items-center justify-center text-primary-foreground shrink-0">
            <f.icon className="h-5 w-5" />
          </div>
          <div>
            <p className="font-semibold text-sm">{f.title}</p>
            <p className="text-xs text-muted-foreground">{f.desc}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="container py-12 grid gap-10 md:grid-cols-4">
      <div>
        <h3 className="font-serif text-2xl font-semibold">FPM <span className="text-gold">Creation</span></h3>
        <p className="text-sm text-muted-foreground mt-3 max-w-xs">
          Affordable luxury gifts, handpicked frames, keychains & idols crafted for every Indian celebration.
        </p>
      </div>
      <div>
        <p className="font-semibold mb-3">Shop</p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/shop" className="hover:text-primary">Decorative Frames</Link></li>
          <li><Link to="/shop" className="hover:text-primary">Keychains</Link></li>
          <li><Link to="/shop" className="hover:text-primary">Car Idols</Link></li>
          <li><Link to="/shop" className="hover:text-primary">Gifting</Link></li>
        </ul>
      </div>
      <div>
        <p className="font-semibold mb-3">Company</p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          <li><a href="#" className="hover:text-primary">Shipping & Returns</a></li>
        </ul>
      </div>
      <div>
        <p className="font-semibold mb-3">Reach Us</p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> {SITE.phone}</li>
          <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> {SITE.email}</li>
          <li className="flex items-center gap-2"><Instagram className="h-4 w-4" /> @fpmcreation</li>
        </ul>
      </div>
    </div>

    <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} FPM Creation. Made with love in India.
    </div>
  </footer>
);
