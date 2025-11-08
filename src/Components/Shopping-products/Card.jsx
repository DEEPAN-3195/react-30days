import React from "react";
import { useCartStore } from "./useCartStore";

export default function Cart() {
    const { cart, removeFromCart, updateQuantity, clearCart } = useCartStore();

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (cart.length === 0)
        return (
            <div className="flex items-center justify-center min-h-screen bg-neutral-light dark:bg-neutral-dark transition-colors duration-300 pt-20">
                <p className="text-center text-neutral-textDark dark:text-neutral-textLight text-lg font-medium">
                    🛒 Cart is empty!
                </p>
            </div>
        );

    return (
        <div className="p-4 space-y-4 pt-20 min-h-screen bg-neutral-light dark:bg-neutral-dark transition-colors duration-300">
            {cart.map((item) => (
                <div
                    key={item.id}
                    className="flex justify-between items-center border border-neutral-border bg-white dark:bg-neutral-card text-neutral-textDark dark:text-neutral-textLight p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                    {/* 🖼️ Product Image + Info */}
                    <div className="flex items-center gap-4">
                        <img
                            src={item.image || "https://via.placeholder.com/60"} // fallback if no image
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg border border-neutral-border shadow-sm"
                        />
                        <div>
                            <h3 className="font-semibold text-primary-dark dark:text-primary-light">
                                {item.name}
                            </h3>
                            <p className="text-sm text-neutral-textDark dark:text-neutral-textLight">
                                ₹{item.price}
                            </p>
                        </div>
                    </div>

                    {/* ➕ Quantity and Remove Controls */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() =>
                                item.quantity > 1
                                    ? updateQuantity(item.id, item.quantity - 1)
                                    : removeFromCart(item.id)
                            }
                            className="bg-neutral-200 dark:bg-neutral-700 text-lg px-2 py-1 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-600 transition"
                        >
                            ➖
                        </button>

                        <span className="font-semibold">{item.quantity}</span>

                        <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="bg-neutral-200 dark:bg-neutral-700 text-lg px-2 py-1 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-600 transition"
                        >
                            ➕
                        </button>

                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="bg-rose-500 hover:bg-rose-600 text-white px-3 py-1 rounded-lg transition"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}

            <h2 className="font-bold text-lg text-primary-dark dark:text-primary-light">
                Total: ₹{total}
            </h2>

            <button
                onClick={clearCart}
                className="bg-rose-600 hover:bg-rose-700 text-white px-5 py-2 rounded-lg shadow-md transition-all"
            >
                Clear Cart
            </button>
        </div>
    );
}
