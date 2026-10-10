export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  description?: string;
  isCombo?: boolean;
}

const CART_KEY = "jashu_momos_cart_v1";

export const getCartFromStorage = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  } catch { return []; }
};

export const saveCartToStorage = (cart: CartItem[]) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    window.dispatchEvent(new Event("jashu_cart_updated"));
  } catch {}
};

export const addToCart = (item: Omit<CartItem, "quantity"> & { quantity: number }): CartItem[] => {
  const cart = getCartFromStorage();
  const idx = cart.findIndex(i => i.id === item.id);
  if (idx > -1) { cart[idx].quantity += item.quantity; }
  else { cart.push({ ...item }); }
  saveCartToStorage(cart);
  return cart;
};

export const updateCartQuantity = (id: string, qty: number): CartItem[] => {
  let cart = getCartFromStorage();
  if (qty <= 0) { cart = cart.filter(i => i.id !== id); }
  else { const item = cart.find(i => i.id === id); if (item) item.quantity = qty; }
  saveCartToStorage(cart);
  return cart;
};

export const removeFromCart = (id: string): CartItem[] => {
  const cart = getCartFromStorage().filter(i => i.id !== id);
  saveCartToStorage(cart);
  return cart;
};

export const clearCart = () => saveCartToStorage([]);

export const getCartTotal = (cart: CartItem[]) =>
  cart.reduce((t, i) => t + i.price * i.quantity, 0);

export const getCartCount = (cart: CartItem[]) =>
  cart.reduce((c, i) => c + i.quantity, 0);
