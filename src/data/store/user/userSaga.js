import {
  CHANGE_EMAIL_ERROR,
  CHANGE_EMAIL_REQUEST, CHANGE_EMAIL_SUCCESS,
  CONFIRM_AUTH_ERROR,
  CONFIRM_AUTH_REQUEST,
  CONFIRM_AUTH_SUCCESS,
  FORGOT_PASSWORD_ERROR, FORGOT_PASSWORD_PENDING,
  FORGOT_PASSWORD_REQUEST,
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
  SIGN_UP_USER_REQUEST, USER_PROFILE_UPDATE
} from './userActionTypes';
import { put, call } from '@redux-saga/core/effects';
import { CLIENTS, LOGIN } from '../../../constants/routes';
import StorageService from '../../../services/StorageService';
import UserService from '../../../services/UserService';
import { delay } from '../../../helpers/delay';

export function * login (action) {
  try {
    const { data, history } = action.payload;
    yield put({ type: LOGIN_USER_REQUEST });
    const response = yield UserService.authUserService(data);
    console.log(response);
    if (response) {
      console.log(response.user);
      yield call(delay);
      StorageService.setItem('acc', response.accessToken);
      StorageService.setItem('rfr', response.refreshToken);
      yield put({ type: LOGIN_USER_SUCCESS, payload: response.user });
      history.push(CLIENTS);
    } else {
      alert('User not find');
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
      yield call(delay);
      yield put({ type: FORGOT_PASSWORD_PENDING });
    } else {
      yield put({ type: FORGOT_PASSWORD_ERROR });
    }
  } catch (e) {
    yield put({ type: FORGOT_PASSWORD_ERROR });
  }
}

export function * resetUserPassword (action) {
  try {
    const { fields, history } = action.payload;
    yield put({ type: RESET_USER_PASSWORD_REQUEST });
    const response = yield UserService.resetPassword(fields);
    if (response) {
      yield call(delay);
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
    yield put({ type: SIGN_UP_USER_REQUEST });
    const response = yield UserService.userService(action.payload);

    if (response) {
      yield call(delay);
      yield put({ type: SIGN_UP_USER_PENDING });
    } else {
      yield put({ type: SIGN_UP_USER_ERROR });
    }
  } catch (e) {
    yield put({ type: SIGN_UP_USER_ERROR });
  }
}

export function * changeEmail (action) {
  try {
    yield put({ type: CHANGE_EMAIL_REQUEST });
    const response = action.payload;
    if (response) {
      yield call(delay);
      yield put({ type: CHANGE_EMAIL_SUCCESS });
    } else {
      yield put({ type: CHANGE_EMAIL_ERROR });
    }
  } catch (e) {
    yield put({ type: CHANGE_EMAIL_ERROR });
  }
}

export function * confirmAuth () {
  try {
    yield put({ type: CONFIRM_AUTH_REQUEST });
    const response = true;
    if (response) {
      yield call(delay);
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
      yield call(delay);
      yield put({ type: GET_USER_SUCCESS, payload: response });
    } else {
      yield put({ type: GET_USER_ERROR });
    }
  } catch (e) {
    yield put({ type: GET_USER_ERROR });
  }
}

export function * userProfileUpdate (action) {
  try {
    yield put({ type: USER_PROFILE_UPDATE.REQUEST });
    const response = UserService.userProfileUpdate(action.payload);
    if (response) {
      yield put({ type: USER_PROFILE_UPDATE.SUCCESS });
    } else {
      yield put({ type: USER_PROFILE_UPDATE.ERROR });
    }
  } catch (e) {
    yield put({ type: USER_PROFILE_UPDATE.ERROR });
  }
}

export function * logOut () {
  StorageService.removeJWTToken('acc');
  StorageService.removeItem('rfr');
}
