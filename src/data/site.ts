export type Category = "vegetable" | "fruit" | "botanical";

export type Pack = {
  size: string;
  price: number;
};

export type Product = {
  slug: string;
  name: string;
  category: Category;
  description: string;
  detail: string;
  image?: string;
  accent: string;
  available: boolean;
  botanicalName: string;
  form: string;
  origin: string;
  applications: string[];
  packSize: string;
  moq: string;
  packs?: Pack[];
};

export const categoryLabels: Record<Category, string> = {
  vegetable: "Dehydrated vegetables",
  fruit: "Dehydrated fruits",
  botanical: "Dehydrated botanicals",
};

export const productSpecs = [
  { parameter: "Appearance", value: "Available on request" },
  { parameter: "Aroma", value: "Available on request" },
  { parameter: "Solubility", value: "Available on request" },
  { parameter: "Particle size", value: "Available on request" },
  { parameter: "Bulk density", value: "Available on request" },
  { parameter: "Packaging", value: "Available on request" },
  { parameter: "Storage", value: "Available on request" },
];

export const products: Product[] = [
  {
    slug: "spinach-powder",
    name: "Spinach Powder",
    category: "vegetable",
    description: "Dehydrated spinach for food and beverage formulations.",
    detail:
      "TRUEFINE spinach powder is produced from dehydrated spinach and prepared as a convenient product for food manufacturers. It is suited to savoury applications, seasonings and formulations that require a stable spinach powder.",
    image: "/images/products/spinach-powder-study.jpg",
    accent: "#1F4D2A",
    available: true,
    botanicalName: "Spinacia oleracea",
    form: "Dehydrated powder",
    origin: "India",
    applications: ["Beverages", "Soups & sauces", "Bakery"],
    packSize: "25kg pack; bulk formats available on request",
    moq: "Available on request",
  },
  {
    slug: "beetroot-powder",
    name: "Beetroot Powder",
    category: "vegetable",
    description: "Dehydrated beetroot for colour and formulation work.",
    detail:
      "TRUEFINE beetroot powder is a dehydrated vegetable product used where food businesses need a consistent beetroot format. Typical applications include savoury products, bakery and formulation development.",
    image: "/images/products/beetroot-powder.png",
    accent: "#7A1E3A",
    available: true,
    botanicalName: "Beta vulgaris",
    form: "Dehydrated powder",
    origin: "India",
    applications: ["Beverages", "Soups & sauces", "Bakery"],
    packSize: "100g and 150g retail packs; bulk formats available on request",
    moq: "1 retail pack; bulk on request",
    packs: [
      { size: "100g", price: 249 },
      { size: "150g", price: 238 },
    ],
  },
  {
    slug: "banana-powder",
    name: "Banana Powder",
    category: "fruit",
    description: "Dehydrated banana for bakery, beverage and food use.",
    detail:
      "TRUEFINE banana powder is produced from dehydrated banana and prepared for food and beverage businesses. It offers a practical format for bakery, beverage and formulation work.",
    image: "/images/products/banana-powder.png",
    accent: "#C4A35A",
    available: true,
    botanicalName: "Musa spp.",
    form: "Dehydrated powder",
    origin: "India",
    applications: ["Beverages", "Bakery", "Formulations"],
    packSize: "25kg pack; bulk formats available on request",
    moq: "Available on request",
  },
  {
    slug: "amla-powder",
    name: "Amla Powder",
    category: "fruit",
    description: "Dehydrated amla for food and beverage use.",
    detail:
      "TRUEFINE amla powder is produced from dehydrated amla and prepared as a convenient product for food and beverage use. It is a formulation ingredient, not a medicinal product.",
    accent: "#C6B15A",
    available: true,
    botanicalName: "Phyllanthus emblica",
    form: "Dehydrated powder",
    origin: "India",
    applications: ["Beverages", "Food", "Formulations"],
    packSize: "100g and 150g retail packs; bulk formats available on request",
    moq: "1 retail pack; bulk on request",
    packs: [
      { size: "100g", price: 299 },
      { size: "150g", price: 213 },
    ],
  },
  {
    slug: "onion-powder",
    name: "Onion Powder",
    category: "vegetable",
    description: "Dehydrated onion for seasoning and savoury manufacture.",
    detail:
      "Onion powder is widely used in savoury foods and seasonings. TRUEFINE can discuss grade, quantity and packaging against your commercial requirement.",
    image: "/images/products/onion-powder.jpg",
    accent: "#8B5A4A",
    available: false,
    botanicalName: "Allium cepa",
    form: "Dehydrated powder",
    origin: "India",
    applications: ["Seasoning", "Savoury foods", "Formulations"],
    packSize: "Available on request",
    moq: "Available on request",
  },
  {
    slug: "carrot-powder",
    name: "Carrot Powder",
    category: "vegetable",
    description: "Dehydrated carrot for savoury and formulation applications.",
    detail:
      "Carrot powder is offered as a dehydrated vegetable product for food businesses that require a stable carrot format. Availability, mesh and packaging can be discussed against your specification.",
    image: "/images/products/carrot-powder.jpg",
    accent: "#C45C26",
    available: true,
    botanicalName: "Daucus carota",
    form: "Dehydrated powder",
    origin: "India",
    applications: ["Food & beverage", "Seasoning", "Formulations"],
    packSize: "100g and 150g retail packs; bulk formats available on request",
    moq: "1 retail pack; bulk on request",
    packs: [
      { size: "100g", price: 249 },
      { size: "150g", price: 204 },
    ],
  },
  {
    slug: "moringa-leaf-powder",
    name: "Moringa Leaf Powder",
    category: "botanical",
    description: "Moringa leaf powder for food and beverage applications.",
    detail:
      "TRUEFINE moringa leaf powder is a plant-based product for food and beverage applications. It is intended as a formulation input, not as a medicinal product. Specifications are shared on request.",
    image: "/images/products/moringa-leaf-powder.jpg",
    accent: "#2D5A27",
    available: true,
    botanicalName: "Moringa oleifera",
    form: "Dehydrated leaf powder",
    origin: "India",
    applications: ["Food & beverage", "Seasoning", "Formulations"],
    packSize: "100g and 150g retail packs; bulk formats available on request",
    moq: "1 retail pack; bulk on request",
    packs: [
      { size: "100g", price: 249 },
      { size: "150g", price: 229 },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((item) => item.slug === slug);
}

export function getRelatedProducts(slug: string, count = 3) {
  const current = getProduct(slug);
  if (!current) return [];
  const same = products.filter(
    (item) => item.slug !== slug && item.category === current.category,
  );
  if (same.length >= count) return same.slice(0, count);
  const rest = products.filter(
    (item) => item.slug !== slug && item.category !== current.category,
  );
  return [...same, ...rest].slice(0, count);
}

export const contact = {
  email: "trufinefoods@gmail.com",
  phone: "+91 96769 49495",
  whatsapp: "919676949495",
  instagram: "trufinefoods",
  address: "8-86/1 Indira Nagar, Chityala, Nalgonda - 508114, Telangana, India",
};

export const shop = {
  discountCode: "BUY3GET8%",
  discountMinQty: 3,
  discountRate: 0.08,
  shippingFee: 130,
  freeShippingSubtotal: 1000,
};
