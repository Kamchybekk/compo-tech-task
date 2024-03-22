import React, { createContext, useContext, useState, useEffect } from 'react';
import { CART_LOCAL_STORAGE_KEY } from '../helpers/constants';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const cart = JSON.parse(
            localStorage.getItem(CART_LOCAL_STORAGE_KEY) || '[]'
        );
        const total = cart.reduce(
            (acc, item) => acc + item.price.currentPrice * item.count,
            0
        );
        setTotalPrice(total);
    }, []);

    const addToCart = (product) => {
        const currentCart = JSON.parse(
            localStorage.getItem(CART_LOCAL_STORAGE_KEY) || '[]'
        );
        const productIndex = currentCart.findIndex(
            (item) => item.id === product.id
        );
        if (productIndex !== -1) {
            currentCart[productIndex].count += product.count;
        } else {
            currentCart.push(product);
        }
        localStorage.setItem(
            CART_LOCAL_STORAGE_KEY,
            JSON.stringify(currentCart)
        );
        setTotalPrice(
            (prevTotal) =>
                prevTotal + product.price.currentPrice * product.count
        );
    };

    return (
        <CartContext.Provider value={{ totalPrice, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
