import { SET_AUTH_LABEL } from './auxiliaryActionTypes';

export const setLabel = (path) => ({
  type: SET_AUTH_LABEL,
  payload: path
});
