import { Link } from "react-router-dom";

import { useFilter } from "../../Contexts/FilterContext";
import "./CategoryList.css";
export function CategoryList({ categories }) {
  const { filters, setFilters } = useFilter();
  return (
    <>
      <section className="">
        <h1 className="heading">Categories</h1>
        <div className="grid-container">
          {categories.map((categoryImage) => {
            return (
              <div className="image-wrapper" key={categoryImage}>
                <Link to="/products">
                  <img
                    src={categoryImage}
                    alt="categoryImage"
                    className="responsive-img"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
