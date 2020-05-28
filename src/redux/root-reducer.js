// it'll work as a reducer function to combine all other states

import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
  // it'll help use to combine all kind of different reducers
  user: userReducer,
  cart: cartReducer,
});
