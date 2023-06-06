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
          {categories.map(({ text, image }) => {
            return (
              <div className="image-wrapper" key={text}>
                <Link to="/products">
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
