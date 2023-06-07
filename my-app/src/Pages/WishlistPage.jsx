import { useWishlist } from "../Contexts/WishlistContext";

export function WishlistPage() {
  const {
    state: { wishlist },
  } = useWishlist();
  return (
    <>
      <section className="grid-container">
        {wishlist?.map((product) => {
          return <Wishlist key={product._id} product={product} />;
        })}
      </section>
    </>
  );
}
