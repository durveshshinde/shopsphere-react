import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState(() => {

        const savedCart = localStorage.getItem("cartItems");

        return savedCart ? JSON.parse(savedCart) : [];

    });


    const [message, setMessage] = useState("");

    useEffect(() => {

        if (!message) return;

        const timer = setTimeout(() => {
            setMessage("");
        }, 2000);

        return () => clearTimeout(timer);

    }, [message]);

    useEffect(() => {

        localStorage.setItem(
            "cartItems",
            JSON.stringify(cartItems)
        );

    }, [cartItems]);

    const addToCart = (product) => {

        setMessage(`${product.name} added to cart`);

        setCartItems((prevItems) => {

            const existingItem = prevItems.find(
                (item) => item.id === product.id
            );

            if (existingItem) {

                return prevItems.map((item) =>
                    item.id === product.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                        }
                        : item
                );

            }

            return [
                ...prevItems,
                {
                    ...product,
                    quantity: 1,
                },
            ];

        });

    };

    const increaseQuantity = (id) => {

        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                    : item
            )
        );

    };

    const decreaseQuantity = (id) => {

        setCartItems((prevItems) =>
            prevItems
                .map((item) =>
                    item.id === id
                        ? {
                            ...item,
                            quantity: item.quantity - 1,
                        }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );

    };

    const removeItem = (id) => {

        console.log("Removing Item:", id);

        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== id)
        );

    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeItem,
                clearCart,
                message,
            }}
        >
            {children}
        </CartContext.Provider>
    );

}

export default CartProvider;