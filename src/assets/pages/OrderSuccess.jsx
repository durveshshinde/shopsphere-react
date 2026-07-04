import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import "./OrderSuccess.css";

function OrderSuccess() {

    const orderId =
        Math.floor(100000 + Math.random() * 900000);

    const deliveryDate = new Date();

    deliveryDate.setDate(deliveryDate.getDate() + 5);

    return (

        <div className="success-container">

            <div className="success-card">

                <FaCheckCircle className="success-icon" />

                <h1>Order Placed Successfully!</h1>

                <p>

                    Thank you for shopping with ShopSphere.

                </p>

                <div className="order-id">

                    Order ID : #{orderId}

                </div>

                <div className="delivery">

                    Estimated Delivery :

                    <strong>

                        {" "}
                        {deliveryDate.toDateString()}

                    </strong>

                </div>

                <Link to="/products">

                    <button className="success-btn">

                        Continue Shopping

                    </button>

                </Link>

            </div>

        </div>

    );

}

export default OrderSuccess;