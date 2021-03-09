import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import './style.css';

const ChoseAccount = ({ setNextStep }) => {
  const [account, setAccount] = useState('');

  const onHandleChange = useCallback((e) => {
    setAccount(e.target.value);
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    alert(account);
    setNextStep(true);
  }, [account]);

  return (
    <form className='create-account-container' onSubmit={onSubmit}>
      <h2>Create client account</h2>
      <p>
        Chose whether you want to create a customer
        alias account or a complete customer account
      </p>
      <div>
        <input type="radio" name='alias' value='alias' id='alias' onChange={onHandleChange}/>
        <label htmlFor="alias">Alias account</label>

        <input type="radio" name='alias' value='complete' id='complete' disabled onChange={onHandleChange}/>
        <label htmlFor="complete">Complete account</label>
      </div>

      <button type='submit'>Move on</button>

    </form>
  );
};

export default ChoseAccount;

ChoseAccount.propTypes = {
  setNextStep: PropTypes.func
};
