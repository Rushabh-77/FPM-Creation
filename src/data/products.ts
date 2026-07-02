import greyPot from "@/assets/Grey pot.png";
import keychain from "@/assets/product-keychain_1.png";
import idol from "@/assets/product-idol.jpg";
import customPhotoHolder from "@/assets/Custom Name Photo Holder_1.png";
import customPhotoHolderAlt from "@/assets/Custom Name Photo Holder.png";
import vase from "@/assets/product-frame.jpg";
import planterDuo from "@/assets/Cute smile.png";
import cutePot from "@/assets/Cute smile.png";
import yellowPot from "@/assets/yellow pot.png";
import type { Product } from "@/lib/site";


export const products: Product[] = [
  {
    id: "royal-gold-frame",
    name: "Yellow decorative Vase Set of 2",
    category: "Decorative Vase and Planter",
    price: 129,
    mrp: 199,
    rating: 4.2,
    reviews: 5,
    image: yellowPot,
    badge: "Bestseller",
    description:
      "Add a touch of elegance to your space with this stylish decorative vase featuring a beautiful textured pattern. Perfect for displaying artificial flowers and enhancing home or office décor. Lightweight, durable, and ideal for desks, shelves, and tabletops.\n\n📏 **Dimensions:** Height: 12.5 cm | Length: 7.5 cm | Width: 7.5 cm\n\n*Note: Flowers shown in images are for display purposes only and are not included.*",
  },
  {
    id: "glazed-ceramic-vase",
    name: "Geometric decorative vase Set of 2",
    category: "Decorative Vase and Planter",
    price: 129,
    mrp: 159,
    rating: 4.6,
    reviews: 42,
    image: greyPot,
    badge: "New",
    description:
      "Enhance your home décor with this modern geometric flower pot, featuring a stylish textured design that complements any interior space. Lightweight and durable, it is perfect for displaying small artificial flowers, succulents, or decorative arrangements on desks, shelves, and tabletops.\n\n📏 **Dimensions:** Height: 8 cm | Length: 7 cm | Width: 7 cm\n\n*Note: Flowers and decorative accessories shown in images are not included.*",
  },
  {
    id: "mini-planter-duo",
    name: "Mini Planter Duo Set",
    category: "Decorative Vase and Planter",
    price: 259,
    mrp: 359,
    rating: 4.8,
    reviews: 67,
    image: planterDuo,
    badge: "Trending",
    description:
      "Bring a playful touch to your décor with this adorable smiley-face planter. Perfect for succulents, small plants, or decorative displays, this lightweight and charming pot adds personality to desks, shelves, and tabletops.\n\n📏 **Size:** 3 × 3 inches\n\n*Note: Plants shown in images are for display purposes only and are not included.* 🌿😊",
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
    id: "luxury-gift-hamper",
    name: "Custom Name Photo Holder",
    category: "Gifting Items",
    price: 159,
    mrp: 199,
    rating: 4.7,
    reviews: 186,
    image: customPhotoHolder,
    images: [customPhotoHolder, customPhotoHolderAlt],
    badge: "Festive Pick",
    description:
      "2-in-1: Photo Holder + Fridge Magnet\n🎁 Personalized • Unique • Perfect Gift",
  },
];
