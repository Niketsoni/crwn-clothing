import { createSelector } from "reselect";

// (input selector) get full reducer state and return piece of it
const selectCart = (state) => state.cart;

// this is an output selector coz here we are using creatSelector() function
export const selectCartItems = createSelector(
  [selectCart], // this is an input selector
  (cart) => cart.cartItems // function to get a slice of this state
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems], // using declaired selector as a selector
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
);
