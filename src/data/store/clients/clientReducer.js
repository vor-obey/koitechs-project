import {
  CREATE_CLIENT_ACCOUNT_ERROR,
  CREATE_CLIENT_ACCOUNT_REQUEST,
  CREATE_CLIENT_ACCOUNT_SUCCESS,
  GET_USERS_ERROR,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS
} from './clientActionsTypes';

const initialState = {
  users: [],
  isLoading: false,
  isError: false
};

export const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isLoading: false
      };

    case GET_USERS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    case CREATE_CLIENT_ACCOUNT_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case CREATE_CLIENT_ACCOUNT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload
      };

    case CREATE_CLIENT_ACCOUNT_ERROR:
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
