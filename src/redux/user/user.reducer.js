// Reducer is nothing but a function which will be responsible to update the slice of state
import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  // here we are setting default parameter value with Initial state coz current state should have some value when it gets initilize
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state, // sending everything which we have in currentstate
        currentUser: action.payload, // sending payload from action to new state
      };
    default:
      return state; // if action type is not same (SET_CURRENT_USER) we'll send current state
  }
};

export default userReducer;
