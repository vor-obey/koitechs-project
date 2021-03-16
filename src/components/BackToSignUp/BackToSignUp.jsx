import React from 'react';
import { SIGN_UP } from '../../constants/routes';
import { useHistory } from 'react-router';

import './style.css';
import MainButton from '../MainButton';

const BackToSignUp = () => {
  const history = useHistory();

  const onClick = () => {
    history.push(SIGN_UP);
  };
  return (
    <div className='back-to-container'>
      <h2>A you a new customer?</h2>
      <MainButton onClick={onClick}>Register now</MainButton>
    </div>
  );
};

export default BackToSignUp;
