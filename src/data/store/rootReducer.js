import { combineReducers } from 'redux';
import { userReducer } from './user/userReducer';
import { clientReducer } from './clients/clientReducer';

export const reducers = combineReducers({
  userReducer,
  clientReducer
});
