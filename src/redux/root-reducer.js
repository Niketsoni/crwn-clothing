// it'll work as a reducer function to combine all other states

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // type of storage(here we have imported localStorage )

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root",
  storage, // default storage type
  whiteList: ["cart"], // reducer which we want to persist
};

const rootReducer = combineReducers({
  // it'll help use to combine all kind of different reducers
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
