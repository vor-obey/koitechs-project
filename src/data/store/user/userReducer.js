import {
  CLEAR_CONFIRM_STEP,
  FORGOT_PASSWORD_ERROR,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  LOGIN_USER_ERROR,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS, RESET_USER_PASSWORD_ERROR, RESET_USER_PASSWORD_REQUEST, RESET_USER_PASSWORD_SUCCESS
} from './userActionTypes';

const initialState = {
  token: '',
  isLoading: false,
  isError: false,
  confirmStep: false
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

    default: {
      return state;
    }
  }
};
