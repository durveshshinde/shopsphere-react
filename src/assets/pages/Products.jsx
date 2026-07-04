import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductList from "../../components/ProductList/ProductList";
import "../styles/Products.css";

function Products() {
  return (
    <>
      <Navbar />

      <div className="page-title">
        <h1>All Products</h1>
        <p>Discover our premium collection</p>
      </div>

      <ProductList />

      <Footer />
    </>
  );
}

export default Products;