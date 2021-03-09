import {
  FORGOT_PASSWORD,
  LOGIN_USER,
  CLEAR_CONFIRM_STEP,
  RESET_USER_PASSWORD,
  SIGN_UP_USER, GET_USER, LOG_OUT
} from './userActionTypes';

export const login = (loginData) => ({
  type: LOGIN_USER,
  payload: loginData
});

export const forgotPassword = (email) => ({
  type: FORGOT_PASSWORD,
  payload: email
});

export const clearConfirmStep = () => ({
  type: CLEAR_CONFIRM_STEP
});

export const resetUserPassword = (data) => ({
  type: RESET_USER_PASSWORD,
  payload: data
});

export const signUp = (userData) => ({
  type: SIGN_UP_USER,
  payload: userData
});

export const getUser = () => ({
  type: GET_USER
});

export const logOut = () => ({
  type: LOG_OUT
});
