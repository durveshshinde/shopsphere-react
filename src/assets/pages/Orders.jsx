import Navbar from "../../components/Navbar/Navbar";
import "./Orders.css";

function Orders() {

    return (

        <>
            <Navbar />

            <div className="orders-container">

                <h1>My Orders</h1>

                <div className="order-card">

                    <div>

                        <h3>Premium Jacket</h3>

                        <p>Order ID : #123456</p>

                        <p>Delivered</p>

                    </div>

                    <div>

                        <h2>₹2999</h2>

                    </div>

                </div>

            </div>

        </>

    );

}

export default Orders;