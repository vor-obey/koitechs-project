import {
  FORGOT_PASSWORD_ERROR,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  LOGIN_USER_ERROR,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  RESET_USER_PASSWORD_ERROR,
  RESET_USER_PASSWORD_REQUEST,
  RESET_USER_PASSWORD_SUCCESS,
  SIGN_UP_USER_ERROR,
  SIGN_UP_USER_REQUEST,
  SIGN_UP_USER_SUCCESS
} from './userActionTypes';
import { put } from '@redux-saga/core/effects';
import { CLIENTS, LOGIN } from '../../../constants/routes';

const userService = async (data) => {
  console.log({ data });
  return Promise.resolve({ accessToken: 'accessToken', refreshToken: 'refreshToken' });
};

const restorePassword = async (data) => {
  return Promise.resolve('success');
};

const resetPassword = async (data) => {
  return Promise.resolve('success');
};

export function * login (action) {
  try {
    yield put({ type: LOGIN_USER_REQUEST });
    const response = yield userService(action.payload);
    if (response) {
      yield put({ type: LOGIN_USER_SUCCESS, payload: response });
      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('refreshToken', response.refreshToken);
    } else {
      yield put({ type: LOGIN_USER_ERROR });
    }
  } catch (e) {
    yield put({ type: LOGIN_USER_ERROR });
  }
}

export function * forgotPassword (action) {
  try {
    yield put({ type: FORGOT_PASSWORD_REQUEST });
    const response = yield restorePassword(action.payload);
    if (response) {
      yield put({ type: FORGOT_PASSWORD_SUCCESS });
    } else {
      yield put({ type: FORGOT_PASSWORD_ERROR });
    }
  } catch (e) {
    yield put({ type: FORGOT_PASSWORD_ERROR });
  }
}

export function * resetUserPassword (action) {
  try {
    const { history } = action.payload;
    yield put({ type: RESET_USER_PASSWORD_REQUEST });
    const response = yield resetPassword(action.payload);
    if (response) {
      yield put({ type: RESET_USER_PASSWORD_SUCCESS });
      history.push(LOGIN);
    } else {
      yield put({ type: RESET_USER_PASSWORD_ERROR });
    }
  } catch (e) {
    yield put({ type: RESET_USER_PASSWORD_ERROR });
  }
}

export function * signUp (action) {
  try {
    const { history, signUpForm } = action.payload;
    yield put({ type: SIGN_UP_USER_REQUEST });
    const response = yield userService(signUpForm);
    if (response) {
      yield put({ type: SIGN_UP_USER_SUCCESS, payload: response });
      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('refreshToken', response.refreshToken);
      history.push(CLIENTS);
    } else {
      yield put({ type: SIGN_UP_USER_ERROR });
    }
  } catch (e) {
    yield put({ type: SIGN_UP_USER_ERROR });
  }
}
