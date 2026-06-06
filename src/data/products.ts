import frame from "@/assets/Cute Smile Pot_2.png";
import keychain from "@/assets/product-keychain_1.png";
import idol from "@/assets/product-idol.jpg";
import gift from "@/assets/product-gift.jpg";
import type { Product } from "@/lib/site";


export const products: Product[] = [
  {
    id: "royal-gold-frame",
    name: "Aesthetic Twin Smiley Desktop Planter Set - Size 3.3 Inch",
    category: "Decorative Frames",
    price: 199,
    mrp: 399,
    rating: 4.2,
    reviews: 5,
    image: frame,
    badge: "Bestseller",
    description:
      "Hand-finished antique gold frame with intricate baroque carvings. Perfect for cherished memories, wedding portraits and gifting. Comes with a sturdy easel stand.",
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
