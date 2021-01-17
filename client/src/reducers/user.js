import {
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  LOGOUT,
  SIGNUP_FAIL,
  LOGIN_FAIL
} from "../constants/actionTypes";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNUP_SUCCESS:
      return { ...state, isLoggedIn: false };
    case LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true, user: payload.user };
    case LOGOUT:
      return { ...state, isLoggedIn: false, user: null };
    case SIGNUP_FAIL:
      return { ...state, isLoggedIn: false };
    case LOGIN_FAIL:
      return { ...state, isLoggedIn: false, user: null };
    default:
      return state;
  }
};
