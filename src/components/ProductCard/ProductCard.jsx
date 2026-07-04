import "./Productcard.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { CartContext } from "../../assets/context/CartContext";
import { WishlistContext } from "../../assets/context/WishlistContext";

function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);

  const {
    toggleWishlist,
    isWishlisted
  } = useContext(WishlistContext);

  return (

    <Link
      to={`/product/${product.id}`}
      className="product-link"
    >

      <div className="product-card">

        <div className="product-image">

          <img
            src={product.image}
            alt={product.name}
          />

        </div>

        <div className="product-info">

          <div className="product-header">

            <span className="product-name">
              {product.name}
            </span>

            <button
              className="wishlist-btn"
              onClick={(e) => {
                e.preventDefault();
                toggleWishlist(product);
              }}
            >
              {
                isWishlisted(product.id)
                  ? <FaHeart />
                  : <FaRegHeart />
              }
            </button>

          </div>

          <p className="brand">{product.brand}</p>

          <div className="rating">

            ⭐ {product.rating}

          </div>

          <div className="price-section">

            <span className="price">
              ₹{product.price}
            </span>

            <span className="old-price">
              ₹{product.oldPrice}
            </span>

          </div>

          <button
            className="cart-btn"
            onClick={(e) => {

              e.preventDefault();

              addToCart(product);

            }}
          >

            Add To Cart

          </button>

        </div>

      </div>

    </Link>

  );

}

export default ProductCard;