import Navbar from "../../components/Navbar/Navbar";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { OrderContext } from "../context/OrderContext";
import { CartContext } from "../context/CartContext";
import "./Checkout.css";


function Checkout() {

    const { cartItems, clearCart } = useContext(CartContext);

    const { placeOrder } = useContext(OrderContext);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        paymentMethod: "cod"
    });

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const gst = subtotal * 0.18;

    const delivery = subtotal > 2000 ? 0 : 99;

    const total = subtotal + gst + delivery;

    const handlePlaceOrder = () => {

        if (cartItems.length === 0) {

            alert("Your cart is empty!");

            return;

        }

        placeOrder(cartItems, total, formData);

        clearCart();

        navigate("/order-success");

    };

    return (

        <>
            <Navbar />

            <div className="checkout-container">

                <h1>Checkout</h1>

                <div className="checkout-grid">

                    <div className="shipping-section">

                        <h2>Shipping Details</h2>

                        <input 
                            type="text" 
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        />

                        <input 
                            type="email" 
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />

                        <input 
                            type="text" 
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />

                        <textarea
                            placeholder="Address"
                            rows="4"
                            value={formData.address}
                            onChange={(e) => setFormData({...formData, address: e.target.value})}
                        />

                        <input 
                            type="text" 
                            placeholder="City"
                            value={formData.city}
                            onChange={(e) => setFormData({...formData, city: e.target.value})}
                        />

                        <input 
                            type="text" 
                            placeholder="State"
                            value={formData.state}
                            onChange={(e) => setFormData({...formData, state: e.target.value})}
                        />

                        <input 
                            type="text" 
                            placeholder="Pincode"
                            value={formData.pincode}
                            onChange={(e) => setFormData({...formData, pincode: e.target.value})}
                        />

                    </div>

                    <div className="payment-section">

                        <h2>Payment Method</h2>

                        <label>
                            <input
                                type="radio"
                                name="payment"
                                value="cod"
                                checked={formData.paymentMethod === "cod"}
                                onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                            />
                            Cash on Delivery
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="payment"
                                value="upi"
                                checked={formData.paymentMethod === "upi"}
                                onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                            />
                            UPI
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="payment"
                                value="card"
                                checked={formData.paymentMethod === "card"}
                                onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                            />
                            Credit / Debit Card
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="payment"
                                value="netbanking"
                                checked={formData.paymentMethod === "netbanking"}
                                onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                            />
                            Net Banking
                        </label>

                        <hr />

                        <h2>Order Summary</h2>

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>₹{subtotal.toFixed(2)}</span>
                        </div>

                        <div className="summary-row">
                            <span>GST (18%)</span>
                            <span>₹{gst.toFixed(2)}</span>
                        </div>

                        <div className="summary-row">
                            <span>Delivery</span>
                            <span>{delivery === 0 ? "FREE" : `₹${delivery}`}</span>
                        </div>

                        <hr />

                        <div className="summary-row total">
                            <strong>Total</strong>
                            <strong>₹{total.toFixed(2)}</strong>
                        </div>

                        <button
                            className="place-order-btn"
                            onClick={handlePlaceOrder}
                        >
                            Place Order
                        </button>

                    </div>

                </div>

            </div>

        </>

    );

}

export default Checkout;