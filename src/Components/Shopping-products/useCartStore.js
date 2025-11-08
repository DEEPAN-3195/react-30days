// import { create } from "zustand";
// export const useCartStore = create((set) => ({
//   card: [],
//   addToCart: (item) =>
//     set((state) => {
//       const existing = state.cart.find((i) => i.id === item.id);
//       if (existing) {
//         return {
//           cart: state.cart.map((i) =>
//             i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//           ),
//         };
//       }
//       return { cart: [...state.cart, { ...item, quantity: 1 }] };
//     }),
// }));

import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],

  addToCart: (item) =>
    set((state) => {
      const existing = state.cart.find((i) => i.id === item.id);
      if (existing) {
        return {
          cart: state.cart.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  updateQuantity: (id, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    })),

  clearCart: () => set({ cart: [] }),

  getTotal: () =>
    set((state) => ({
      total: state.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
    })),
}));
