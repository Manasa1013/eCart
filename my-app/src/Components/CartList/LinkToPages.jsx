import { Link } from "react-router-dom";

export function LinkToPages() {
  return (
    <div className="cart-button__container ">
      <Link to="/products">
        <button
          style={{
            width: "9.5rem",
          }}
          className="button button--secondary hover"
        >
          <span> Visit Products</span>
        </button>
      </Link>
      <Link to="/wishlist">
        <button className="button button--secondary hover">
          <span>Add from Wishlist</span>
        </button>
      </Link>
    </div>
  );
}
