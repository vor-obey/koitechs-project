import { put } from '@redux-saga/core/effects';
import {
  CREATE_CLIENT_ACCOUNT_ERROR,
  CREATE_CLIENT_ACCOUNT_REQUEST, CREATE_CLIENT_ACCOUNT_SUCCESS,
  GET_USERS_ERROR,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS
} from './clientActionsTypes';
import { ClientService } from '../../../services/ClientService';

export function * getUsers () {
  try {
    yield put({ type: GET_USERS_REQUEST });
    const response = ClientService.getUsers();
    if (response) {
      yield put({ type: GET_USERS_SUCCESS, payload: response });
    } else {
      yield put({ type: GET_USERS_ERROR });
    }
  } catch (e) {
    yield put({ type: GET_USERS_ERROR });
  }
}

export function * createClientAccount (action) {
  try {
    yield put({ type: CREATE_CLIENT_ACCOUNT_REQUEST });
    const response = ClientService.setClient(action.payload);
    console.log(action.payload);
    if (response) {
      yield put({ type: CREATE_CLIENT_ACCOUNT_SUCCESS, payload: response });
    } else {
      yield put({ type: CREATE_CLIENT_ACCOUNT_ERROR });
    }
  } catch (e) {
    yield put({ type: CREATE_CLIENT_ACCOUNT_ERROR });
  }
}
