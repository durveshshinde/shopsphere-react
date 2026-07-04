import { useParams } from "react-router-dom";
import products from "../../data/products";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./ProductDetails.css";

function ProductDetails() {

    const { id } = useParams();

    const product = products.find(
        (item) => item.id === Number(id)
    );

    if (!product) {
        return <h2>Product Not Found</h2>;
    }

    return (
        <>
            <Navbar />

            <div className="product-details">

                <div className="product-image">
                    <img
                        src={product.image}
                        alt={product.name}
                    />
                </div>

                <div className="product-info">

                    <h1>{product.name}</h1>

                    <div className="rating">
                        ⭐ {product.rating}
                    </div>

                    <div className="price">

                        <span className="current-price">
                            ₹{product.price}
                        </span>

                        <span className="old-price">
                            ₹{product.oldPrice}
                        </span>

                    </div>

                    <p className="description">
                        Premium quality product from ShopSphere.
                        Designed with comfort, durability and modern
                        fashion in mind. Perfect for everyday use.
                    </p>

                    <button className="cart-button">
                        Add To Cart
                    </button>

                </div>

            </div>

            <Footer />

        </>
    );
}

export default ProductDetails;

