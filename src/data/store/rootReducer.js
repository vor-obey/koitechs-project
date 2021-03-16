import { combineReducers } from 'redux';
import { userReducer } from './user/userReducer';
import { clientReducer } from './clients/clientReducer';
import { auxiliaryReducer } from './helpers/auxiliaryReducer';

export const reducers = combineReducers({
  userReducer,
  clientReducer,
  auxiliaryReducer
});
