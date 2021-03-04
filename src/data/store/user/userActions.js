import { FORGOT_PASSWORD, LOGIN_USER, CLEAR_CONFIRM_STEP, RESET_USER_PASSWORD } from './userActionTypes';

export const login = (loginData) => ({
  type: LOGIN_USER,
  payload: loginData
});

export const forgotPassword = (email) => ({
  type: FORGOT_PASSWORD,
  payload: email
});

export const clearConfirmStep = () => ({ type: CLEAR_CONFIRM_STEP });

export const resetUserPassword = (data) => ({
  type: RESET_USER_PASSWORD,
  payload: data
});
