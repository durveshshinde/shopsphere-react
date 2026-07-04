import { createContext, useState, useEffect } from "react";

export const OrderContext = createContext();

function OrderProvider({ children }) {

    const [orders, setOrders] = useState(() => {

        const savedOrders = localStorage.getItem("orders");

        return savedOrders ? JSON.parse(savedOrders) : [];

    });

    useEffect(() => {

        localStorage.setItem(
            "orders",
            JSON.stringify(orders)
        );

    }, [orders]);

    const placeOrder = (cartItems, total) => {

        const newOrder = {

            id: Math.floor(100000 + Math.random() * 900000),

            items: cartItems,

            total,

            date: new Date().toLocaleDateString(),

            status: "Confirmed"

        };

        setOrders((prev) => [newOrder, ...prev]);

    };

    return (

        <OrderContext.Provider
            value={{
                orders,
                placeOrder
            }}
        >

            {children}

        </OrderContext.Provider>

    );

}

export default OrderProvider;