import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Navbar from "../../components/Navbar/Navbar";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {

    const navigate = useNavigate();

    const {
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
    } = useContext(CartContext);

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const gst = subtotal * 0.18;

    const delivery = subtotal > 0 ? 0 : 0;

    const total = subtotal + gst + delivery;

    return (
        <>
            <Navbar />

            <div className="cart-container">

                <h1>Shopping Cart</h1>

                <div className="cart-layout">

                    <div className="cart-items">

                        {cartItems.length === 0 ? (
                            <div className="empty-cart">

                                <div className="empty-icon">
                                    🛒
                                </div>

                                <h1>Your Cart is Empty</h1>

                                <h2>Looks like you haven't added anything yet.</h2>

                                <p>
                                    Browse our latest premium collections and
                                    start shopping today.
                                </p>

                                <button
                                    className="continue-btn"
                                    onClick={() => navigate("/products")}
                                >
                                    Continue Shopping
                                </button>

                            </div>

                        ) : (

                            cartItems.map((item) => (

                                <div
                                    className="cart-card"
                                    key={item.id}
                                >

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                    />

                                    <div className="cart-info">

                                        <h2>{item.name}</h2>

                                        <p className="price">
                                            ₹{item.price}
                                        </p>

                                        <div className="quantity-box">

                                            <span>Quantity :</span>

                                            <button
                                                className="qty-btn"
                                                onClick={() => decreaseQuantity(item.id)}
                                            >
                                                -
                                            </button>

                                            <span className="qty">
                                                {item.quantity}
                                            </span>

                                            <button
                                                className="qty-btn"
                                                onClick={() => increaseQuantity(item.id)}
                                            >
                                                +
                                            </button>

                                        </div>

                                        <button
                                            className="remove-btn"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            🗑 Remove
                                        </button>

                                    </div>

                                </div>

                            ))

                        )}

                    </div>

                    <div className="order-summary">
                        <h2>Order Summary</h2>
                        <div className="summary-row">
                            <span>Subtotal:</span>
                            <span>₹{subtotal.toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>GST (18%):</span>
                            <span>₹{gst.toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Delivery:</span>
                            <span>₹{delivery.toFixed(2)}</span>
                        </div>
                        <div className="summary-row total">
                            <span>Total:</span>
                            <span>₹{total.toFixed(2)}</span>
                        </div>
                        <button 
                            className="checkout-btn"
                            onClick={() => navigate("/checkout")}
                        >
                            Proceed to Checkout
                        </button>
                    </div>

                </div>

            </div>

        </>
    );
}

export default Cart;