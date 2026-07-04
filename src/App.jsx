import { Routes, Route } from "react-router-dom";

import Home from "./assets/pages/Home";
import Products from "./assets/pages/Products";
import ProductDetails from "./assets/pages/ProductDetails";
import Cart from "./assets/pages/Cart";
import Wishlist from "./assets/pages/Wishlist";
import Checkout from "./assets/pages/Checkout";
import OrderSuccess from "./assets/pages/OrderSuccess";
import Orders from "./assets/pages/Orders";
import Login from "./assets/pages/Login";
import Signup from "./assets/pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute/ProtectedRoute";
import NotFound from "./assets/pages/NotFound";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/products" element={<Products />} />

      <Route path="/product/:id" element={<ProductDetails />} />

      <Route path="/cart" element={<Cart />} />

      <Route
        path="/wishlist"
        element={
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        }
      />
      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />

      <Route
        path="/order-success"
        element={<OrderSuccess />}
      />

      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        }
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;