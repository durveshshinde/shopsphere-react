import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../../assets/context/CartContext";
import { WishlistContext } from "../../assets/context/WishlistContext";
import { AuthContext } from "../../assets/context/AuthContext";

import {
  FaShoppingCart,
  FaHeart,
  FaSearch,
  FaUser,
} from "react-icons/fa";

import "./Navbar.css";

function Navbar() {

  const { message, cartItems } = useContext(CartContext);

  const { user, logout } = useContext(AuthContext);


  const { wishlistItems } = useContext(WishlistContext);
  const [search, setSearch] = useState("");

  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();

  const handleSearch = (e) => {

    if (e.key === "Enter" && search.trim() !== "") {

      navigate(`/products?search=${encodeURIComponent(search)}`);

      setSearch("");

    }

  };



  return (
    <>
      <nav className="navbar">
        <div className="container">

          {/* Logo */}
          <div className="logo">
            <Link to="/">ShopSphere</Link>
          </div>

          {/* Navigation Links */}
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>

          {/* Right Section */}
          <div className="nav-right">

            <div className="search-box">
              <FaSearch />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleSearch}
              />
            </div>

            <Link
              to="/wishlist"
              className="icon wishlist-icon"
            >

              <FaHeart />

              {
                wishlistItems.length > 0 && (

                  <span className="wishlist-count">

                    {wishlistItems.length}

                  </span>

                )
              }

            </Link>

            <Link to="/cart" className="icon cart-icon">

              <FaShoppingCart />

              {cartItems.length > 0 && (
                <span className="cart-count">
                  {cartItems.length}
                </span>
              )}

            </Link>

            {
              user ? (

                <div className="user-section">

                  <button
                    className="profile-btn"
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    👤 {user.name} ▼
                  </button>

                  {
                    showMenu && (

                      <div className="profile-menu">

                        <Link
                          to="/orders"
                          onClick={() => setShowMenu(false)}
                        >
                          📦 My Orders
                        </Link>

                        <button
                          onClick={() => {

                            logout();

                            setShowMenu(false);

                          }}
                        >
                          🚪 Logout
                        </button>

                      </div>

                    )
                  }

                </div>

              ) : (

                <Link
                  to="/login"
                  className="login-btn"
                >

                  <FaUser />

                  Login

                </Link>

              )
            }

          </div>

        </div>
      </nav>

      {message && (
        <div className="toast">
          ✅ {message}
        </div>
      )}
    </>
  );
}

export default Navbar;