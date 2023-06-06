import { Link } from "react-router-dom";

import { slider_1, slider_2, slider_3 } from "../../assets/list";
import "./Slider.css";
export function Slider({ increaseSlideIndex, decreaseSlideIndex, slideIndex }) {
  const slideImages = [slider_1, slider_2, slider_3];
  return (
    <>
      <div className="grid-container">
        <div className="slider">
          <div className="slide">
            <Link to="/products">
              <img
                src={
                  (slideImages.length > 0 && slideImages[slideIndex]) ||
                  slideImages[0]
                }
                alt={`Left-handed-accessory ${slideImages[slideIndex]}`}
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
