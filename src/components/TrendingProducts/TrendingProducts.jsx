import "./TrendingProducts.css";
import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";

function TrendingProducts() {
  return (
    <section className="trending-products">

      <h2>Trending Products</h2>

      <div className="products-grid">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}

export default TrendingProducts;