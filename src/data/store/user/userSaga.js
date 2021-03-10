import {
  CONFIRM_AUTH_ERROR,
  CONFIRM_AUTH_REQUEST,
  CONFIRM_AUTH_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  GET_USER_ERROR,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  RESET_USER_PASSWORD_ERROR,
  RESET_USER_PASSWORD_REQUEST,
  RESET_USER_PASSWORD_SUCCESS,
  SIGN_UP_USER_ERROR,
  SIGN_UP_USER_PENDING,
  SIGN_UP_USER_REQUEST
} from './userActionTypes';
import { put } from '@redux-saga/core/effects';
import { CLIENTS, LOGIN } from '../../../constants/routes';
import StorageService from '../../../services/StorageService';
import UserService from '../../../services/UserService';

export function * login (action) {
  try {
    const { history, form } = action.payload;
    yield put({ type: LOGIN_USER_REQUEST });
    const response = yield UserService.authUserService(form);
    if (response) {
      yield put({ type: LOGIN_USER_SUCCESS, payload: response.user });
      StorageService.setItem('acc', response.accessToken);
      StorageService.setItem('rfr', response.refreshToken);
      history.push(CLIENTS);
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
    const response = yield UserService.restorePassword(action.payload);
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
    const response = yield UserService.resetPassword(action.payload);
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
    const { signUpForm } = action.payload;
    yield put({ type: SIGN_UP_USER_REQUEST });
    const response = yield UserService.userService(signUpForm);

    if (response) {
      yield put({ type: SIGN_UP_USER_PENDING });
    } else {
      yield put({ type: SIGN_UP_USER_ERROR });
    }
  } catch (e) {
    yield put({ type: SIGN_UP_USER_ERROR });
  }
}

export function * confirmAuth () {
  try {
    yield put({ type: CONFIRM_AUTH_REQUEST });
    const response = true;
    if (response) {
      yield put({ type: CONFIRM_AUTH_SUCCESS });
    } else {
      yield put({ type: CONFIRM_AUTH_ERROR });
    }
  } catch (e) {
    yield put({ type: CONFIRM_AUTH_ERROR });
  }
}

export function * getUser () {
  try {
    yield put({ type: GET_USER_REQUEST });
    const response = yield UserService.getUserService();
    if (response) {
      yield put({ type: GET_USER_SUCCESS, payload: response });
    } else {
      yield put({ type: GET_USER_ERROR });
    }
  } catch (e) {
    yield put({ type: GET_USER_ERROR });
  }
}

export function * logOut () {
  StorageService.removeJWTToken('acc');
  StorageService.removeItem('rfr');
}
