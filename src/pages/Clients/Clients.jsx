import React, { useCallback, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router';

import './style.css';
import { CREATE_ACCOUNT } from '../../constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../data/store/clients/clientActions';

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
  }, [dispatch]);

  return (
    <div className='clients-container'>
      <select name="users" id="users" >
        {userSelect}
      </select>

      <button onClick={onCreateAccount}>Create new client account</button>
    </div>
  );
};

export default Clients;
