export const initialState = {
  cart: [],
};

export function CartReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_CART":
      return { ...state, cart: [...payload] };
    default:
      return { ...state };
  }
}
