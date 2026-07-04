import "./Categories.css";
import categories from "../../data/categories";

function Categories() {
    return (
        <section className="categories">

            <h2>Shop by Category</h2>

            <div className="category-container">

                {categories.map((category) => (

                    <div className="category-card" key={category.id}>

                        <div className="category-icon">
                            {category.icon}
                        </div>
                        <h3>{category.title}</h3>
                        <p>{category.products}</p>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Categories;