export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  badge?: string;
  spicyLevel?: number;
  isVeg: boolean;
}
export interface ComboItem {
  id: string;
  name: string;
  price: number | null;
  description: string;
  includedItems: string[];
  image: string;
  isVeg: boolean;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "phatka-momos",
    name: "Phatka Momos",
    price: 500,
    description: "Spicy, saucy 100% veg momos tossed in signature chili sauce.",
    image: "/images/phatka-momos.jpg",
    badge: "🔥 Customer Special",
    spicyLevel: 3,
    isVeg: true,
  },
  {
    id: "chaptale-momos",
    name: "Chaptale Momos",
    price: 200,
    description: "Crispy pan-fried veg momos with a delicious crunchy twist.",
    image: "/images/chaptale-momos.jpg",
    badge: "⭐ House Special",
    spicyLevel: 1,
    isVeg: true,
  },
  {
    id: "kurkure-momos",
    name: "Kurkure Momos",
    price: 300,
    description: "Crunchy golden breaded veg momos, totally irresistible.",
    image: "/images/kurkure-momos.jpg",
    badge: "✨ Super Crunch",
    spicyLevel: 2,
    isVeg: true,
  },
  {
    id: "steam-momos",
    name: "Steam Momos",
    price: 1000,
    description: "Soft, warm, freshly steamed 100% veg momos.",
    image: "/images/steam-momos.jpg",
    badge: "🥟 Classic Bestseller",
    spicyLevel: 1,
    isVeg: true,
  },
];

// Set to a number (e.g. 999) to enable combo purchasing. null = "Coming Soon"
export const COMBO_PRICE: number | null = null;

export const NUM_NUM_COMBO: ComboItem = {
  id: "num-num-combo",
  name: "Num Num Combo!",
  price: COMBO_PRICE,
  description: "All your favourite 100% veg momos together in one happy combo!",
  includedItems: [
    "Phatka Veg Momos",
    "Chaptale Veg Momos",
    "Kurkure Veg Momos",
    "Steam Veg Momos",
    "One Coffee",
    "One Coke",
  ],
  image: "/images/num-num-combo.jpg",
  isVeg: true,
};
