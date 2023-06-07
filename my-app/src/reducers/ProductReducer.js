export const initialState = {
  products: [],
};
export function ProductReducer(state, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
}
