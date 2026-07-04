import { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext();

function WishlistProvider({ children }) {

    const [wishlistItems, setWishlistItems] = useState([]);

    // Load from localStorage on mount
    useEffect(() => {
        const savedWishlist = localStorage.getItem("wishlistItems");
        if (savedWishlist) {
            setWishlistItems(JSON.parse(savedWishlist));
        }
    }, []);

    // Save to localStorage when wishlistItems changes
    useEffect(() => {
        localStorage.setItem(
            "wishlistItems",
            JSON.stringify(wishlistItems)
        );
    }, [wishlistItems]);

    const toggleWishlist = (product) => {

        const exists = wishlistItems.find(
            item => item.id === product.id
        );

        if (exists) {

            setWishlistItems(
                wishlistItems.filter(
                    item => item.id !== product.id
                )
            );

        } else {

            setWishlistItems([
                ...wishlistItems,
                product
            ]);

        }

    };

    const isWishlisted = (id) => {

        return wishlistItems.some(
            item => item.id === id
        );

    };

    return (

        <WishlistContext.Provider
            value={{
                wishlistItems,
                toggleWishlist,
                isWishlisted
            }}
        >

            {children}

        </WishlistContext.Provider>

    );

}

export default WishlistProvider;