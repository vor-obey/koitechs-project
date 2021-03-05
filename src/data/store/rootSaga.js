import { takeEvery } from '@redux-saga/core/effects';
import { LOGIN_USER, FORGOT_PASSWORD, RESET_USER_PASSWORD, SIGN_UP_USER } from './user/userActionTypes';
import * as userSaga from './user/userSaga';

export function * rootSaga () {
  yield takeEvery(LOGIN_USER, userSaga.login);
  yield takeEvery(FORGOT_PASSWORD, userSaga.forgotPassword);
  yield takeEvery(RESET_USER_PASSWORD, userSaga.resetUserPassword);
  yield takeEvery(SIGN_UP_USER, userSaga.signUp);
}
