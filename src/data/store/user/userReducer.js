import {
  CHANGE_EMAIL_ERROR,
  CHANGE_EMAIL_REQUEST, CHANGE_EMAIL_SUCCESS,
  CLEAR_CONFIRM_STEP,
  CONFIRM_AUTH_ERROR,
  CONFIRM_AUTH_REQUEST,
  CONFIRM_AUTH_SUCCESS,
  FORGOT_PASSWORD_ERROR, FORGOT_PASSWORD_PENDING,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  GET_USER_ERROR,
  GET_USER_REQUEST,
  GET_USER_SUCCESS, GO_TO_CHANGE_EMAIL, IS_AUTH,
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
  SIGN_UP_USER_SUCCESS, SIMULATE_CLICK_ON_LINK, USER_PROFILE_UPDATE
} from './userActionTypes';
import { CHANGE_EMAIL, CONFIRMATION, PENDING, SUCCESS } from '../../../constants/authStatus';

const initialState = {
  token: '',
  user: null,
  isLoading: false,
  isError: false,
  forgotPassword: {
    status: ''
  },
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
        isLoading: false,
        user: action.payload
      };

    case LOGIN_USER_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false
      };

    case SIMULATE_CLICK_ON_LINK:
      return {
        ...state,
        forgotPassword: {
          status: CONFIRMATION
        }
      };

    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case FORGOT_PASSWORD_PENDING:
      return {
        ...state,
        isLoading: false,
        forgotPassword: {
          status: PENDING
        }
      };

    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        forgotPassword: {
          status: ''
        }
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
        isLoading: false,
        forgotPassword: {
          status: ''
        }
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
          status: ''
        }
      };

    case SIGN_UP_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    case CONFIRM_AUTH_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case CONFIRM_AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        auth: {
          status: SUCCESS
        }
      };

    case CONFIRM_AUTH_ERROR:
      return {
        ...state,
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

    case IS_AUTH:
      return {
        ...state,
        auth: {
          status: ''
        }
      };

    case GO_TO_CHANGE_EMAIL:
      return {
        ...state,
        auth: {
          status: CHANGE_EMAIL
        }
      };

    case CHANGE_EMAIL_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case CHANGE_EMAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        auth: {
          status: PENDING
        }
      };

    case CHANGE_EMAIL_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false
      };

    case USER_PROFILE_UPDATE.REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case USER_PROFILE_UPDATE.SUCCESS:
      return {
        ...state,
        isLoading: false
      };

    case USER_PROFILE_UPDATE.ERROR:
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
        forgotPassword: {
          status: false
        },
        auth: {
          status: ''
        }
      };

    default: {
      return state;
    }
  }
};
