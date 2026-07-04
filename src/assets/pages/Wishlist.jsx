import { useContext } from "react";
import { CartContext } from "../../assets/context/CartContext";
import { WishlistContext } from "../../assets/context/WishlistContext";
import Navbar from "../../components/Navbar/Navbar";
import "./Wishlist.css";

function Wishlist() {

    const {
        wishlistItems,
        toggleWishlist,
    } = useContext(WishlistContext);

    const { addToCart } = useContext(CartContext);

    return (
        <>
            <Navbar />

            <div className="wishlist-container">

                <h1>My Wishlist ❤️</h1>

                {
                    wishlistItems.length === 0 ? (

                        <div className="empty-wishlist">

                            <h2>Your wishlist is empty</h2>

                            <p>Save your favourite products here.</p>

                        </div>

                    ) : (

                        <div className="wishlist-grid">

                            {
                                wishlistItems.map((item) => (

                                    <div
                                        className="wishlist-card"
                                        key={item.id}
                                    >

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                        />

                                        <h2>{item.name}</h2>

                                        <p>{item.brand}</p>

                                        <h3>₹{item.price}</h3>

                                        <div className="wishlist-buttons">

                                            <button
                                                className="move-btn"
                                                onClick={() => addToCart(item)}
                                            >
                                                Move to Cart
                                            </button>

                                            <button
                                                className="remove-btn"
                                                onClick={() => toggleWishlist(item)}
                                            >
                                                Remove
                                            </button>

                                        </div>

                                    </div>

                                ))
                            }

                        </div>

                    )
                }

            </div>

        </>
    );
}

export default Wishlist;