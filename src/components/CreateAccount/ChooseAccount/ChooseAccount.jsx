import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import MainButton from '../../MainButton';
import { Radio } from 'antd';

const ChooseAccount = ({ setNextStep, setClientData, clientData }) => {
  const onHandleChange = useCallback((e) => {
    setClientData({ ...clientData, account: e.target.value });
    console.log({ ...clientData, account: e.target.value });
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

      <Radio.Group onChange={onHandleChange} value='alias' className='checkbox-block'>
        <Radio value='alias'>Alias</Radio>
        <Radio value='complete' disabled>Complete</Radio>
      </Radio.Group>

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
