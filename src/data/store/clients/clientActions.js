import { CREATE_CLIENT_ACCOUNT, GET_USERS } from './clientActionsTypes';

export const getUsers = () => ({
  type: GET_USERS
});

export const createClient = (data) => ({
  type: CREATE_CLIENT_ACCOUNT,
  payload: data
});
