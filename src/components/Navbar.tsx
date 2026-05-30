import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/site";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-lg">
      {/* Top promo strip */}
      <div className="bg-gold text-primary-foreground text-xs sm:text-sm py-2 overflow-hidden">
        <div className="marquee whitespace-nowrap flex gap-12 font-medium">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 shrink-0">
              <span className="flex items-center gap-2"><Sparkles className="h-3.5 w-3.5" /> Flat ₹50 OFF Today — Use Code: FPM50</span>
              <span>✦ Cash on Delivery Available All Over India</span>
              <span>✦ Free Shipping Above ₹999</span>
              <span>✦ DM to Order on WhatsApp</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="FPM Creation logo" className="h-9 w-9 object-contain" />
          <span className="font-serif text-2xl font-semibold tracking-tight">
            FPM <span className="text-gold">Creation</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-smooth hover:text-primary ${isActive ? "text-primary" : "text-foreground/80"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={waLink("Hi FPM Creation, I'd like to place an order.")} target="_blank" rel="noreferrer" className="hidden sm:inline-flex">
            <Button variant="gold" size="sm">DM to Order</Button>
          </a>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`py-3 px-2 rounded-md text-base font-medium ${pathname === l.to ? "bg-accent text-accent-foreground" : ""}`}
              >
                {l.label}
              </Link>
            ))}
            <a href={waLink("Hi FPM Creation, I'd like to place an order.")} target="_blank" rel="noreferrer">
              <Button variant="gold" className="w-full mt-2">DM to Order on WhatsApp</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
