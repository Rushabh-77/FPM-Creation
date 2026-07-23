import greyPot from "@/assets/Grey pot.png";
import greyPotOne from "@/assets/Grey Pot_1.png";
import greyPotTwo from "@/assets/Grey Pot_2.png";
import keychain from "@/assets/product-keychain_1.png";
import idolOne from "@/assets/Om Resin idol_1.png";
import idolTwo from "@/assets/Om Resin idol_2.png";
import idolThree from "@/assets/Om Resin idol_3.png";
import idolFour from "@/assets/Om Resin idol_4.png";
import idolFive from "@/assets/Om Resin idol_5.png";
import customPhotoHolder from "@/assets/Custom Name Photo Holder_1.png";
import customPhotoHolderAlt from "@/assets/Custom Name Photo Holder.png";
import coasters from "@/assets/Adventure Coaster_1.png";
import coastersAlt from "@/assets/Adventure Coaster_2.png";
import dbzCoasters from "@/assets/DBZ Coaster_1.png";
import dbzCoastersAlt from "@/assets/DBZ Coaster_2.png";
import dbzCoastersThird from "@/assets/DBZ coaster_3.png";
import vase from "@/assets/product-frame.jpg";
import planterDuo from "@/assets/Cute smile.png";
import planterDuoOne from "@/assets/Cute Smile Pot_1.png";
import planterDuoTwo from "@/assets/Cute Smile Pot_2.png";
import yellowPot from "@/assets/yellow pot.png";
import yellowPotOne from "@/assets/Yellow Pot_1.png";
import yellowPotTwo from "@/assets/Yellow Pot_2.png";
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
    images: [yellowPot, yellowPotOne, yellowPotTwo],
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
    images: [greyPot, greyPotOne, greyPotTwo],
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
    images: [planterDuo, planterDuoOne, planterDuoTwo],
    badge: "Trending",
    description:
      "Bring a playful touch to your décor with this adorable smiley-face planter. Perfect for succulents, small plants, or decorative displays, this lightweight and charming pot adds personality to desks, shelves, and tabletops.\n\n📏 **Size:** 3 × 3 inches\n\n*Note: Plants shown in images are for display purposes only and are not included.* 🌿😊",
  },
  {
    id: "car-dashboard-idol",
    name: "Resin Om Idol – Symbol of Peace & Positivity",
    category: "Home Decor",
    price: 189,
    mrp: 259,
    rating: 4.7,
    reviews: 32,
    image: idolOne,
    images: [idolOne, idolTwo, idolThree, idolFour, idolFive],
    badge: "New",
    description:
      "Invite divine energy into your space with our beautifully handcrafted Resin Om Idol. Designed with a premium glossy finish and elegant detailing, this decorative piece represents peace, positivity, and spiritual harmony. Whether placed in your home, office, pooja room, or on your car dashboard, it adds a touch of devotion and sophistication to any setting.",
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
    id: "custom-name-photo-holder",
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
  {
    id: "adventure-coasters",
    name: "Adventure Coaster Set",
    category: "Coasters",
    price: 149,
    mrp: 199,
    rating: 4.5,
    reviews: 24,
    image: coasters,
    images: [coasters, coastersAlt],
    badge: "New",
    description:
      "Bring the outdoors to your table with this **Adventure Coaster Set**. Featuring four unique mountain-inspired designs and a matching holder, these coasters help protect surfaces from water rings and condensation. Perfect for cold drinks, coffee tables, office desks, RVs, cabins, or as a thoughtful gift for nature lovers.",
  },
  {
    id: "dbz-coaster-set",
    name: "Dragon Ball Z Coaster Set",
    category: "Coasters",
    price: 199,
    mrp: 249,
    rating: 4.8,
    reviews: 38,
    image: dbzCoasters,
    images: [dbzCoasters, dbzCoastersAlt, dbzCoastersThird],
    badge: "Anime Edition",
    description:
      "A premium Dragon Ball Z coaster set featuring Frieza, Vegeta, Goku, and Majin Buu. Built for everyday use and designed for true anime fans.",
  },
];
