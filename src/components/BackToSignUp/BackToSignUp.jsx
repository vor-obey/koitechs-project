import React from 'react';
import { SIGN_UP } from '../../constants/routes';
import { useHistory } from 'react-router';

import './style.css';

const BackToSignUp = () => {
  const history = useHistory();

  const onClick = () => {
    history.push(SIGN_UP);
  };
  return (
    <div className='back-to-container'>
      <h2>A you a new customer?</h2>
      <button onClick={onClick}>Register now</button>
    </div>
  );
};

export default BackToSignUp;
