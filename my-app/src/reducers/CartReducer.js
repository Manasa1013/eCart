export const initialState = {
  cart: [],
};

export function CartReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_CART":
      return { ...state, cart: payload };
    case "INCREASE_QUANTITY":
      return { ...state, cart: payload };
    case "DECREASE_QUANTITY":
      return { ...state, cart: payload };

    default:
      return { ...state };
  }
}
