import blazer from "../assets/images/Products/Men/blazer.jpg.jpg";
import hoodie from "../assets/images/Products/Men/hoodie.jpg.jpg";
import jacket from "../assets/images/Products/Men/jacket.jpg (2).jpg";
import jeans from "../assets/images/Products/Men/jeans.jpg.jpg";
import shirt from "../assets/images/Products/Men/Shirt.jpg (2).jpg";

import dress from "../assets/images/Products/Women/dress.jpg.jpg";
import handbag from "../assets/images/Products/Women/handbag.jpg.jpg";
import heels from "../assets/images/Products/Women/heels.jpg.jpg";
import skirt from "../assets/images/Products/Women/skirt.jpg.jpg";
import top from "../assets/images/Products/Women/top.jpg.jpg";

import boots from "../assets/images/Products/Shoes/boots.jpg.jpg";
import casual from "../assets/images/Products/Shoes/casual.jpg.jpg";
import loafers from "../assets/images/Products/Shoes/loafers.jpg.jpg";
import running from "../assets/images/Products/Shoes/running.jpg.jpg";
import sneakers from "../assets/images/Products/Shoes/sneakers.jpg.jpg";

import backpack from "../assets/images/Products/Accessories/backpack.jpg.jpg";
import cap from "../assets/images/Products/Accessories/cap.jpg.jpg";
import sunglasses from "../assets/images/Products/Accessories/sunglasses.jpg.jpg";
import wallet from "../assets/images/Products/Accessories/wallet.jpg.jpg";
import watch from "../assets/images/Products/Accessories/watch.jpg.jpg";

const products = [

  {
    id: 1,
    name: "Premium Jacket",
    brand: "Levi's",
    category: "Men",
    description: "Premium cotton jacket designed for everyday comfort and style.",
    price: 2999,
    oldPrice: 3999,
    discount: 25,
    rating: 4.8,
    stock: 12,
    image: jacket,
  },

  {
    id: 2,
    name: "Classic Shirt",
    brand: "Allen Solly",
    category: "Men",
    description: "Slim fit formal shirt made with breathable fabric.",
    price: 1499,
    oldPrice: 1999,
    discount: 20,
    rating: 4.7,
    stock: 18,
    image: shirt,
  },

  {
    id: 3,
    name: "Casual Hoodie",
    brand: "Puma",
    category: "Men",
    description: "Warm fleece hoodie perfect for winter and casual outings.",
    price: 2199,
    oldPrice: 2999,
    discount: 27,
    rating: 4.6,
    stock: 10,
    image: hoodie,
  },

  {
    id: 4,
    name: "Blue Jeans",
    brand: "Wrangler",
    category: "Men",
    description: "Stretchable denim jeans with a modern slim fit.",
    price: 1899,
    oldPrice: 2499,
    discount: 24,
    rating: 4.5,
    stock: 20,
    image: jeans,
  },

  {
    id: 5,
    name: "Premium Blazer",
    brand: "Van Heusen",
    category: "Men",
    description: "Elegant blazer suitable for office meetings and parties.",
    price: 4999,
    oldPrice: 6499,
    discount: 23,
    rating: 4.9,
    stock: 8,
    image: blazer,
  },

  {
    id: 6,
    name: "Floral Dress",
    brand: "Zara",
    category: "Women",
    description: "Elegant floral dress perfect for parties and casual outings.",
    price: 2799,
    oldPrice: 3499,
    discount: 20,
    rating: 4.8,
    stock: 15,
    image: dress,
  },

  {
    id: 7,
    name: "Leather Handbag",
    brand: "Caprese",
    category: "Women",
    description: "Premium leather handbag with spacious compartments.",
    price: 3299,
    oldPrice: 4299,
    discount: 23,
    rating: 4.9,
    stock: 10,
    image: handbag,
  },

  {
    id: 8,
    name: "High Heels",
    brand: "Metro",
    category: "Women",
    description: "Stylish high heels designed for comfort and elegance.",
    price: 2499,
    oldPrice: 3199,
    discount: 22,
    rating: 4.7,
    stock: 18,
    image: heels,
  },

  {
    id: 9,
    name: "Denim Skirt",
    brand: "ONLY",
    category: "Women",
    description: "Modern denim skirt for everyday fashion.",
    price: 1699,
    oldPrice: 2199,
    discount: 18,
    rating: 4.6,
    stock: 22,
    image: skirt,
  },

  {
    id: 10,
    name: "Casual Top",
    brand: "H&M",
    category: "Women",
    description: "Soft cotton top suitable for everyday wear.",
    price: 1299,
    oldPrice: 1699,
    discount: 24,
    rating: 4.7,
    stock: 30,
    image: top,
  },

  {
    id: 11,
    name: "Leather Boots",
    brand: "Woodland",
    category: "Shoes",
    description: "Premium leather boots for outdoor adventures and everyday style.",
    price: 3999,
    oldPrice: 4999,
    discount: 20,
    rating: 4.8,
    stock: 14,
    image: boots,
  },

  {
    id: 12,
    name: "Casual Sneakers",
    brand: "Nike",
    category: "Shoes",
    description: "Lightweight sneakers for daily comfort and casual wear.",
    price: 2499,
    oldPrice: 3299,
    discount: 24,
    rating: 4.9,
    stock: 18,
    image: casual,
  },

  {
    id: 13,
    name: "Classic Loafers",
    brand: "Red Tape",
    category: "Shoes",
    description: "Elegant loafers designed for office and formal occasions.",
    price: 2799,
    oldPrice: 3499,
    discount: 20,
    rating: 4.7,
    stock: 15,
    image: loafers,
  },

  {
    id: 14,
    name: "Running Shoes",
    brand: "Adidas",
    category: "Shoes",
    description: "Comfortable running shoes with superior cushioning.",
    price: 3599,
    oldPrice: 4499,
    discount: 20,
    rating: 4.9,
    stock: 20,
    image: running,
  },

  {
    id: 15,
    name: "Sports Sneakers",
    brand: "Puma",
    category: "Shoes",
    description: "Breathable sports sneakers built for active lifestyles.",
    price: 2899,
    oldPrice: 3699,
    discount: 22,
    rating: 4.8,
    stock: 16,
    image: sneakers,
  },

  {
    id: 16,
    name: "Travel Backpack",
    brand: "Skybags",
    category: "Accessories",
    description: "Spacious travel backpack with multiple compartments for everyday use.",
    price: 2499,
    oldPrice: 3199,
    discount: 22,
    rating: 4.8,
    stock: 18,
    image: backpack,
  },

  {
    id: 17,
    name: "Baseball Cap",
    brand: "Nike",
    category: "Accessories",
    description: "Comfortable cotton cap with an adjustable strap.",
    price: 899,
    oldPrice: 1299,
    discount: 31,
    rating: 4.6,
    stock: 40,
    image: cap,
  },

  {
    id: 18,
    name: "Polarized Sunglasses",
    brand: "Ray-Ban",
    category: "Accessories",
    description: "Premium UV-protected sunglasses for everyday wear.",
    price: 3499,
    oldPrice: 4499,
    discount: 22,
    rating: 4.9,
    stock: 12,
    image: sunglasses,
  },

  {
    id: 19,
    name: "Leather Wallet",
    brand: "WildHorn",
    category: "Accessories",
    description: "Premium genuine leather wallet with multiple card slots.",
    price: 1299,
    oldPrice: 1699,
    discount: 24,
    rating: 4.7,
    stock: 25,
    image: wallet,
  },

  {
    id: 20,
    name: "Smart Wrist Watch",
    brand: "Fastrack",
    category: "Accessories",
    description: "Stylish smartwatch with fitness tracking and notifications.",
    price: 4999,
    oldPrice: 6499,
    discount: 23,
    rating: 4.8,
    stock: 14,
    image: watch,
  },

];

export default products;
