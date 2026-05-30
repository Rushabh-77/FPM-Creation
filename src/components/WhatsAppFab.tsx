import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export const WhatsAppFab = () => (
  <a
    href={waLink("Hi FPM Creation! I'm interested in your products.")}
    target="_blank"
    rel="noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-5 right-5 z-50 group"
  >
    <span className="absolute inset-0 rounded-full bg-success/40 animate-ping" />
    <span className="relative flex items-center gap-2 bg-success text-success-foreground rounded-full pl-4 pr-5 py-3 shadow-elegant font-semibold text-sm hover:scale-105 transition-smooth">
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">DM to Order</span>
    </span>
  </a>
);
