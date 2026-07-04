import "./hero.css";
import heroImage from "../../assets/images/hero.png";


function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <p className="hero-subtitle">NEW ARRIVALS 2026</p>

                <h1>
                    Discover Your
                    <span> Perfect Style</span>
                </h1>

                <p className="hero-description">
                    Upgrade your wardrobe with premium fashion,
                    exclusive collections and unbeatable prices.
                </p>

                <div className="hero-buttons">
                    <button className="shop-btn">
                        Shop Now
                    </button>

                    <button className="explore-btn">
                        Explore Collection
                    </button>
                </div>
            </div>


            <div className="hero-image">
                <img src={heroImage} alt="Fashion Model" />
            </div>
        </section>
    );
}

export default Hero;