import { useWishlist } from "../Contexts/WishlistContext";
import { Wishlist } from "../Components/Wishlist/Wishlist";
import "../Components/ProductList/ProductList.css";
import { Link } from "react-router-dom";
export function WishlistPage() {
  const {
    state: { wishlist },
  } = useWishlist();
  return (
    <>
      <section className="grid-container" style={{ marginBottom: "3rem" }}>
        {wishlist.length === 0 && (
          <div className="flex-row">
            <Link to="/products" className="button button--secondary">
              Visit Products
            </Link>
            <Link to="/cart" className="button button--secondary">
              Add from Cart
            </Link>
          </div>
        )}
        {wishlist?.map((product) => {
          return <Wishlist key={product._id} product={product} />;
        })}
      </section>
    </>
  );
}
