export const initialState = {
  wishlist: [],
};

export function WishlistReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_WISHLIST":
      return { ...state, wishlist: [...payload] };

    default:
      return { ...state };
  }
}
