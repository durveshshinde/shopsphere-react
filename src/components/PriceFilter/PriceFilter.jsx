import "./PriceFilter.css";

function PriceFilter({ maxPrice, setMaxPrice }) {
    return (
        <div className="price-filter">

            <h3>Price</h3>

            <input
                type="range"
                min="500"
                max="5000"
                step="100"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
            />

            <p>₹ {maxPrice}</p>

        </div>
    );
}

export default PriceFilter;