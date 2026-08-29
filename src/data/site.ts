export type Category = "vegetable" | "fruit" | "botanical";

export type Product = {
  slug: string;
  name: string;
  category: Category;
  description: string;
  image?: string;
  accent: string;
  available: boolean;
};

export const products: Product[] = [
  {
    slug: "spinach-powder",
    name: "Spinach Powder",
    category: "vegetable",
    description: "Dehydrated spinach for food and beverage formulations.",
    image: "/images/products/spinach-powder-study.jpg",
    accent: "#1F4D2A",
    available: true,
  },
  {
    slug: "beetroot-powder",
    name: "Beetroot Powder",
    category: "vegetable",
    description: "Dehydrated beetroot for colour and formulation work.",
    image: "/images/products/beetroot-powder.png",
    accent: "#7A1E3A",
    available: true,
  },
  {
    slug: "banana-powder",
    name: "Banana Powder",
    category: "fruit",
    description: "Dehydrated banana for bakery, beverage and food use.",
    image: "/images/products/banana-powder.png",
    accent: "#C4A35A",
    available: true,
  },
  {
    slug: "onion-powder",
    name: "Onion Powder",
    category: "vegetable",
    description: "Dehydrated onion for seasoning and savoury manufacture.",
    image: "/images/products/onion-powder.jpg",
    accent: "#8B5A4A",
    available: false,
  },
  {
    slug: "carrot-powder",
    name: "Carrot Powder",
    category: "vegetable",
    description: "Dehydrated carrot for savoury and formulation applications.",
    image: "/images/products/carrot-powder.jpg",
    accent: "#C45C26",
    available: false,
  },
  {
    slug: "moringa-leaf-powder",
    name: "Moringa Leaf Powder",
    category: "botanical",
    description: "Moringa leaf powder for food and beverage applications.",
    image: "/images/products/moringa-leaf-powder.jpg",
    accent: "#2D5A27",
    available: false,
  },
];

export function getProduct(slug: string) {
  return products.find((item) => item.slug === slug);
}

export const contact = {
  email: "trufinefoods@gmail.com",
  phone: "+91 96769 49495",
  whatsapp: "919676949495",
  instagram: "trufinefoods",
  address: "8-86/1 Indira Nagar, Chityala, Nalgonda - 508114, Telangana, India",
};
