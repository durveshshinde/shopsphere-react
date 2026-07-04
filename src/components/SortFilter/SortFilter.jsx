import "./SortFilter.css";

function SortFilter({ sortOption, setSortOption }) {
    return (
        <div className="sort-filter">

            <label>Sort By</label>

            <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
            >
                <option value="featured">Featured</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
            </select>

        </div>
    );
}

export default SortFilter;