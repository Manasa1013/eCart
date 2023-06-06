import { Link } from "react-router-dom";

import { useFilter } from "../../Contexts/FilterContext";
import "./CategoryList.css";
import { products } from "../../backend/db/products";
export function CategoryList({ categories }) {
  const { filters, setFilters, filteredProducts } = useFilter();
  return (
    <>
      <section className="">
        <h1 className="heading">Categories</h1>
        <div className="grid-container">
          {categories.map(({ text, image }) => {
            return (
              <div className="image-wrapper" key={text}>
                <Link
                  to="/products"
                  onClick={(e) => {
                    setFilters((prev) => ({
                      ...prev,
                      category: [...prev.category, text],
                    }));

                    filteredProducts(products, filters.category);
                  }}
                >
                  <img src={image} alt={text} className="responsive-img" />
                </Link>
                <p className="para">{text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
