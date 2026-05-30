export const SITE = {
  name: "FPM Creation",
  tagline: "Affordable Luxury, Crafted with Love",
  phone: "+91 98765 43210",
  whatsapp: "919876543210", // change to your number
  email: "hello@fpmcreation.in",
  instagram: "https://instagram.com/fpmcreation",
};

export const waLink = (msg: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  mrp: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  badge?: string;
};
