import "./ProductList.css";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import SearchBar from "../SearchBar/SearchBar";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import PriceFilter from "../PriceFilter/PriceFilter";
import SortFilter from "../SortFilter/SortFilter";

function ProductList() {

    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [maxPrice, setMaxPrice] = useState(5000);
    const [sortOption, setSortOption] = useState("featured");

    const [searchParams] = useSearchParams();

    useEffect(() => {

        const urlSearch = searchParams.get("search");

        if (urlSearch) {
            setSearch(urlSearch);
        }

    }, [searchParams]);

    const filteredProducts = products.filter((product) => {

        const searchText = search.toLowerCase();

        const searchMatch =
            product.name.toLowerCase().includes(searchText) ||
            product.brand.toLowerCase().includes(searchText) ||
            product.category.toLowerCase().includes(searchText);

        const categoryMatch =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        const priceMatch =
            product.price <= maxPrice;

        return searchMatch && categoryMatch && priceMatch;

    });

    const sortedProducts = [...filteredProducts];

    if (sortOption === "lowToHigh") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "highToLow") {
        sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "rating") {
        sortedProducts.sort((a, b) => b.rating - a.rating);
    }

    return (
        <section className="product-list">

            <SearchBar
                search={search}
                setSearch={setSearch}
            />

            <SortFilter
                sortOption={sortOption}
                setSortOption={setSortOption}
            />

            <div className="product-layout">

                <CategoryFilter
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />

                <PriceFilter
                    maxPrice={maxPrice}
                    setMaxPrice={setMaxPrice}

                />

                <div className="product-grid">

                    {filteredProducts.length > 0 ? (
                        sortedProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))
                    ) : (
                        <h2>No Products Found</h2>
                    )}

                </div>

            </div>

        </section>
    );
}

export default ProductList;