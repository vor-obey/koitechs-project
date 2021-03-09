import {
  CLEAR_CONFIRM_STEP,
  FORGOT_PASSWORD_ERROR,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  GET_USER_ERROR,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOG_OUT,
  LOGIN_USER_ERROR,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  RESET_USER_PASSWORD_ERROR,
  RESET_USER_PASSWORD_REQUEST,
  RESET_USER_PASSWORD_SUCCESS,
  SIGN_UP_USER_ERROR,
  SIGN_UP_USER_PENDING,
  SIGN_UP_USER_REQUEST,
  SIGN_UP_USER_SUCCESS
} from './userActionTypes';
import { PENDING, SUCCESS } from '../../../constants/authStatus';

const initialState = {
  token: '',
  user: null,
  isLoading: false,
  isError: false,
  confirmStep: false,
  auth: {
    status: ''
  }
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        token: action.payload.accessToken,
        isLoading: false
      };

    case LOGIN_USER_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false
      };

    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        confirmStep: true
      };

    case FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    case CLEAR_CONFIRM_STEP:
      return {
        ...state,
        confirmStep: false
      };

    case RESET_USER_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case RESET_USER_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false
      };

    case RESET_USER_PASSWORD_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    case SIGN_UP_USER_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case SIGN_UP_USER_PENDING:
      return {
        ...state,
        isLoading: false,
        auth: {
          status: PENDING
        }
      };

    case SIGN_UP_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        auth: {
          status: SUCCESS
        }
      };

    case SIGN_UP_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    case GET_USER_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload
      };

    case GET_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    case LOG_OUT:
      return {
        token: '',
        user: null,
        isLoading: false,
        isError: false,
        confirmStep: false
      };

    default: {
      return state;
    }
  }
};
