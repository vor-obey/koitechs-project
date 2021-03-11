import React, { useCallback, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router';

import './style.css';
import { CREATE_ACCOUNT } from '../../constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../data/store/clients/clientActions';
import MainButton from '../../components/MainButton';
import { getUser } from '../../data/store/user/userActions';

const Clients = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const clients = useSelector(state => state.clientReducer.users);
  const userSelect = useMemo(() => clients.map(user => <option key={user.id} value={user.name}>{user.name}</option>), [clients]);

  const onCreateAccount = useCallback(() => {
    history.push(CREATE_ACCOUNT);
  }, []);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className='clients-container'>
      <select name="users" id="users" >
        {userSelect}
      </select>

      <MainButton disabled onClick={onCreateAccount}>Create new client account</MainButton>
    </div>
  );
};

export default Clients;
