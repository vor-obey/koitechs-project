import React, { useCallback } from 'react';

import './style.css';
import { CLIENTS } from '../../../constants/routes';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { createClient } from '../../../data/store/clients/clientActions';

const ChoseName = ({ setClientData, clientData }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onChangeName = useCallback((e) => {
    setClientData({ ...clientData, name: e.target.value });
  }, [clientData]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(createClient(clientData));
    history.push(CLIENTS);
  }, [dispatch, clientData]);

  return (
    <form className='chose-name-container' onSubmit={onSubmit}>
      <title>Create alias client account</title>

      <div className='enter-name'>
        <h2>Name*</h2>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' value={clientData.name} placeholder='name' onChange={onChangeName}/>
        <button type='submit'>Register</button>
      </div>
    </form>
  );
};

export default ChoseName;

ChoseName.propTypes = {
  setClientData: PropTypes.func,
  clientData: PropTypes.object
};
