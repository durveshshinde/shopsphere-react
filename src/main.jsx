import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import App from "./App";
import "./index.css";

import CartProvider from "./assets/context/CartContext";
import WishlistProvider from "./assets/context/WishlistContext";
import OrderProvider from "./assets/context/OrderContext";
import AuthProvider from "./assets/context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <OrderProvider>
              <App />

              <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                pauseOnHover
                theme="colored"
              />
            </OrderProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);