import React, { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router';

import './style.css';
import users from '../../mocks/usersMock';
import { CREATE_ACCOUNT } from '../../constants/routes';

const Clients = () => {
  const history = useHistory();
  const userSelect = useMemo(() => users.map(user => <option key={user.id} value={user.name}>{user.name}</option>), []);
  const onCreateAccount = useCallback(() => {
    history.push(CREATE_ACCOUNT);
  });

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
