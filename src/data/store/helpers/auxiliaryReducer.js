import { SET_AUTH_LABEL } from './auxiliaryActionTypes';

const initialState = {
  authLabel: '/login'
};

export const auxiliaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_LABEL:
      return {
        ...state,
        authLabel: action.payload
      };

    default: {
      return state;
    }
  }
};
