import "./CategoryFilter.css";
import categories from "../../data/categories";

function CategoryFilter({
    selectedCategory,
    setSelectedCategory
}) {

    return (
        <div className="category-filter">

            <h3>Filters</h3>

            {categories.map((category) => (

                <button
                    key={category.id}
                    className={
                        selectedCategory === category.title
                            ? "active"
                            : ""
                    }
                    onClick={() =>
                        setSelectedCategory(category.title)
                    }
                >
                    {category.icon} {category.title}
                </button>

            ))}

        </div>
    );
}

export default CategoryFilter;