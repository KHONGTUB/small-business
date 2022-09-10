import { combineReducers } from "redux";

const user = (state = null) => state;

const listings = (state = [], action) => {
  switch (action.type) {
    case "ADD_LISTING":
      return [...state, action.value];
    case "REMOVE_LISTING":
      const newstate = [...state];
      newstate.splice(action.value, 1);
      return newstate;
    default:
      return state;
  }
};

const loggedIn = (state = false, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.value;
    case "LOGOUT":
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({ listings, user, loggedIn });
