export const initialState = {
  wishlist: [],
};

export function WishlistReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_WISHLIST":
      const newWishlist = [...payload];
      return { ...state, wishlist: newWishlist };

    default:
      return { ...state };
  }
}
