import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addCart = (item) => {
    setCart((prev) => {
      const exist = prev.find((i) => i.id === item.id);
      if (exist) {
        return prev.map((it) =>
          it.id === item.id ? { ...it, quantity: it.quantity + 1 } : it
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeCart = (id) => {
    setCart((prev) => prev.filter(item.id !== id));
  };
  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addCart, removeCart, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("error");
  }
  return context;
}
