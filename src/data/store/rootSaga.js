import { takeEvery } from '@redux-saga/core/effects';
import {
  LOGIN_USER,
  FORGOT_PASSWORD,
  RESET_USER_PASSWORD,
  SIGN_UP_USER,
  GET_USER,
  LOG_OUT,
  CONFIRM_AUTH,
  CHANGE_EMAIL,
  USER_PROFILE_UPDATE
} from './user/userActionTypes';
import * as userSaga from './user/userSaga';
import * as clientSaga from './clients/clientSaga';
import { CREATE_CLIENT_ACCOUNT, GET_USERS } from './clients/clientActionsTypes';

export function * rootSaga () {
  yield takeEvery(LOGIN_USER, userSaga.login);
  yield takeEvery(FORGOT_PASSWORD, userSaga.forgotPassword);
  yield takeEvery(RESET_USER_PASSWORD, userSaga.resetUserPassword);
  yield takeEvery(SIGN_UP_USER, userSaga.signUp);
  yield takeEvery(CONFIRM_AUTH, userSaga.confirmAuth);
  yield takeEvery(GET_USER, userSaga.getUser);
  yield takeEvery(LOG_OUT, userSaga.logOut);
  yield takeEvery(CHANGE_EMAIL, userSaga.changeEmail);
  yield takeEvery(USER_PROFILE_UPDATE.ACTION, userSaga.userProfileUpdate);

  yield takeEvery(GET_USERS, clientSaga.getUsers);
  yield takeEvery(CREATE_CLIENT_ACCOUNT, clientSaga.createClientAccount);
}
