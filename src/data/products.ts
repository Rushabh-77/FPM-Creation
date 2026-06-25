import greyPot from "@/assets/Grey pot.png";
import keychain from "@/assets/product-keychain_1.png";
import idol from "@/assets/product-idol.jpg";
import gift from "@/assets/product-gift.jpg";
import vase from "@/assets/product-frame.jpg";
import planterDuo from "@/assets/Cute Smiley Pot_1.png";
import cutePot from "@/assets/Cute Smiley pot.png";
import type { Product } from "@/lib/site";


export const products: Product[] = [
  {
    id: "royal-gold-frame",
    name: "Aesthetic Twin Smiley Desktop Planter Set - Size 3.3 Inch",
    category: "Decorative Vase and Planter",
    price: 199,
    mrp: 399,
    rating: 4.2,
    reviews: 5,
    image: greyPot,
    badge: "Bestseller",
    description:
      "Matte grey ceramic planter with sculpted curves and a drainable base. Perfect for succulents and desktop greenery in modern decor.",
  },
  {
    id: "glazed-ceramic-vase",
    name: "Geometric decorative vase",
    category: "Decorative Vase and Planter",
    price: 129,
    mrp: 159,
    rating: 4.6,
    reviews: 42,
    image: greyPot,
    badge: "New",
    description:
      "Hand-painted glazed ceramic vase with a soft matte finish. Ideal for fresh blooms and tabletop decor in modern homes.",
  },
  {
    id: "mini-planter-duo",
    name: "Mini Planter Duo Set",
    category: "Decorative Vase and Planter",
    price: 329,
    mrp: 599,
    rating: 4.8,
    reviews: 67,
    image: planterDuo,
    badge: "Trending",
    description:
      "A matching pair of mini planters with drainage trays. Perfect for succulents, herbs, or desktop greens.",
  },
  {
    id: "textured-stoneware-vase",
    name: "Textured Stoneware Vase",
    category: "Decorative Vase and Planter",
    price: 299,
    mrp: 499,
    rating: 4.5,
    reviews: 54,
    image: vase,
    badge: "Handcrafted",
    description:
      "A tall stoneware vase with a hand-textured finish. Adds sculptural charm to dried stems or fresh flowers.",
  },
  {
    id: "succulent-planter-trio",
    name: "Succulent Planter Trio Set",
    category: "Decorative Vase and Planter",
    price: 379,
    mrp: 699,
    rating: 4.7,
    reviews: 81,
    image: cutePot,
    badge: "Trending",
    description:
      "Three compact planters in a coordinating set, designed for succulents, cacti, and small indoor plants.",
  },
  {
    id: "personalised-keychain",
    name: "Personalised Name Keychain",
    category: "Keychains",
    price: 89,
    mrp: 120,
    rating: 4.2,
    reviews: 3,
    image: keychain,
    badge: "Customisable",
    description:
      "Premium rose-gold engraved keychain — add any name, date or message. A heartfelt mini-gift that fits every pocket and every occasion.",
  },
  {
    id: "ganesha-dashboard-idol",
    name: "Brass Ganesha Car Idol",
    category: "Car Dashboard Idols",
    price: 449,
    mrp: 799,
    rating: 4.9,
    reviews: 274,
    image: idol,
    badge: "Shubh Labh",
    description:
      "Blessed brass-finish Ganesha idol crafted for your car dashboard. Anti-slip base, detailed carving and a divine presence for every journey.",
  },
  {
    id: "luxury-gift-hamper",
    name: "Luxury Gifting Hamper",
    category: "Gifting Items",
    price: 1299,
    mrp: 1999,
    rating: 4.7,
    reviews: 186,
    image: gift,
    badge: "Festive Pick",
    description:
      "Curated white-and-gold gift hamper with handpicked premium goodies, dried florals and elegant packaging. Ready to gift, ready to impress.",
  },
];
