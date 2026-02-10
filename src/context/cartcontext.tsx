import React, { createContext, useContext, useState } from "react";
import { type Product } from "../api/products";

type CartItem = Product & { qty: number };

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {
        setCart((prev) => {
            const exists = prev.find((p) => p.id === product.id);
            if (exists) {
                return prev.map((p) =>
                    p.id === product.id ? { ...p, qty: p.qty + 1 } : p
                );
            }
            return [...prev, { ...product, qty: 1 }];
        });
    };

    const removeFromCart = (id: number) => {
        setCart((prev) => prev.filter((p) => p.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used inside CartProvider");
    return ctx;
};
