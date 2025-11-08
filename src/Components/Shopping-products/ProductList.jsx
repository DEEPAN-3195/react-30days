import React from "react";
import { useCartStore } from "./useCartStore";
import { ShoppingCart } from "lucide-react"; // icon
import { useNavigate } from "react-router-dom";
import ThemeToggle from "../ThemeContext/ThemeToggle";

const ProductList = () => {
    const cart = useCartStore((state) => state.cart);
    const addToCart = useCartStore((state) => state.addToCart);
    const navigate = useNavigate();

    const products = [
        {
            id: 1,
            name: "Ear Phone",
            price: 199,
            image: "https://picsum.photos/200?random=1",
        },
        {
            id: 2,
            name: "T-Shirt",
            price: 299,
            image: "https://picsum.photos/200?random=2",
        },
        {
            id: 3,
            name: "Jean Pants",
            price: 599,
            image: "https://picsum.photos/200?random=3",
        },
        {
            id: 4,
            name: "Smart Watch",
            price: 999,
            image: "https://picsum.photos/200?random=4",
        },
        {
            id: 5,
            name: "Shoes",
            price: 799,
            image: "https://picsum.photos/200?random=5",
        },
        {
            id: 6,
            name: "Cap",
            price: 199,
            image: "https://picsum.photos/200?random=6",
        },
        {
            id: 7,
            name: "Backpack",
            price: 499,
            image: "https://picsum.photos/200?random=7",
        },
        {
            id: 8,
            name: "Wallet",
            price: 299,
            image: "https://picsum.photos/200?random=8",
        },
        {
            id: 9,
            name: "Sunglasses",
            price: 399,
            image: "https://picsum.photos/200?random=9",
        },
    ];


    return (
        <div className="relative p-8  dark:bg-gray-600 min-h-screen transition-colors pt-[85px]">
            <div
                className="absolute top-6 right-20 flex items-center gap-2 cursor-pointer z-50"
                onClick={() => navigate("/cart")}
            >
                <div className="relative">
                    <ShoppingCart className="w-8 h-8 text-primary-dark dark:text-secondary-light" />
                    {cart.length > 0 && (
                        <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                            {cart.length}
                        </span>
                    )}
                </div>
                <span className="text-primary-dark dark:text-secondary-light font-semibold">
                    Cart
                </span>
            </div>

            <h1 className="text-3xl font-bold mb-10 text-center text-primary-dark dark:text-secondary-light">
                🛍️ Product List
            </h1>
            {/* <div
                className="absolute top-6 left-8 flex items-center gap-2 cursor-pointer"

            ><ThemeToggle /></div> */}

            {/* 3x3 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                {products.map((p) => (
                    <div
                        key={p.id}
                        className="border border-primary-soft dark:border-secondary-light rounded-2xl 
    shadow-md p-4 flex flex-col items-center 
    bg-white dark:bg-secondary-dark hover:shadow-lg 
    hover:scale-105 transition-transform duration-200"
                    >
                        <img
                            src={p.image}
                            alt={p.name}
                            className="w-30 h-30 object-cover rounded-xl mb-4 shadow-sm"
                        />
                        <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                            {p.name}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">₹{p.price}</p>
                        <button
                            onClick={() => addToCart(p)}
                            className="bg-primary hover:bg-primary-hover dark:bg-secondary hover:dark:bg-secondary-hover 
      text-white px-4 py-2 rounded-lg transition-colors"
                        >
                            Add to Cart
                        </button>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default ProductList;
