import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import MainButton from '../../MainButton';

const ChooseAccount = ({ setNextStep, setClientData, clientData }) => {
  const onHandleChange = useCallback((e) => {
    setClientData({ ...clientData, account: e.target.value });
  }, [clientData]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    setNextStep(true);
  }, []);

  return (
    <form className='create-account-container' onSubmit={onSubmit}>
      <h2>Create client account</h2>
      <p>
        Chose whether you want to create a customer
        alias account or a complete customer account
      </p>
      <div>
        <input type="radio" name='alias' value='alias' checked id='alias' onChange={onHandleChange}/>
        <label htmlFor="alias">Alias account</label>

        <input type="radio" name='alias' value='complete' id='complete' disabled onChange={onHandleChange}/>
        <label htmlFor="complete">Complete account</label>
      </div>

      <MainButton type='submit'>Move on</MainButton>

    </form>
  );
};

export default ChooseAccount;

ChooseAccount.propTypes = {
  setNextStep: PropTypes.func,
  setClientData: PropTypes.func,
  clientData: PropTypes.object
};
