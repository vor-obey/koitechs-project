import React, { useCallback } from 'react';
import { NavLink as Nav } from 'react-router-dom';

import { SIGN_UP } from '../../../constants/routes';
import './style.css';

const SignUpConfirm = () => {
  const onSend = useCallback((e) => {
    e.preventDefault();
    alert('Email resent');
  }, []);

  return (
    <div className='confirm-reg-container'>
      <h1>Loading...</h1>
      <p>
        You have received a confirmation email to the email address
      you provided, please confirm your email to proceed
      </p>
      <div className='confirm-reg-links'>
        <Nav to={SIGN_UP}>Change email address</Nav>
        <Nav to='/' onClick={onSend}>Send confirmation email again</Nav>
      </div>
      <button>Simulation confirm registration</button>
    </div>
  );
};

export default SignUpConfirm;
