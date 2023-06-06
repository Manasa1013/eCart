import { Link } from "react-router-dom";

import "./Slider.css";
export function Slider({
  categories,
  increaseSlideIndex,
  decreaseSlideIndex,
  slideIndex,
}) {
  console.log({ categories });
  return (
    <>
      <div className="grid-container">
        <div className="slider">
          <div className="slide">
            <Link to="/products">
              <img
                src={
                  (categories.length > 0 && categories[slideIndex]) ||
                  categories[0]
                }
                alt={`Left-handed-accessory ${categories[slideIndex]}`}
              />
            </Link>
          </div>
          <button
            type="button"
            className="btn-arrow btn-next"
            onClick={() => increaseSlideIndex()}
          >
            &gt;
          </button>
          <button
            type="button"
            className="btn-arrow btn-prev"
            onClick={() => decreaseSlideIndex()}
          >
            &lt;
          </button>
        </div>
      </div>
    </>
  );
}
