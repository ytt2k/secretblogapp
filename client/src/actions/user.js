import * as api from "../api";
import {
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  LOGOUT
} from "../constants/actionTypes";

export const login = (credentials) => async (dispatch) => {
  try {
    const { data } = await api.loginUser(credentials);
    dispatch({ type: LOGIN_SUCCESS, payload: { user: data } });
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (user) => async (dispatch) => {
  try {
    const { data } = await api.signUpUser(user);
    dispatch({ type: SIGNUP_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    api.logoutUser();
    dispatch({ type: LOGOUT });
  } catch (error) {
    console.log(error);
  }
};
