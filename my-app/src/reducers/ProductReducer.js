export const initialState = {
  products: [],
  cart: [],
  wishlist: [],
  user: {},
  addresses: [],
  selectedAddress: {},
};
export function ProductReducer(state, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
}
