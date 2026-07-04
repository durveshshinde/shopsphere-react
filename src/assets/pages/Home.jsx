import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import TrendingProducts from "../../components/TrendingProducts/TrendingProducts";
import FeaturedOffers from "../../components/FeaturedOffers/FeaturedOffers";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories/>
      <TrendingProducts/>
      <FeaturedOffers/>
      <Newsletter/>
      <Footer/>
    </>
  );
}

export default Home;