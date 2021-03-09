import React from 'react';
import { NavLink as Nav } from 'react-router-dom';

import { CLIENTS } from '../../../constants/routes';
import './style.css';

const SignUpConfirmSuccess = () => {
  return (
    <div className='sign-up-success'>
      <h1>You are done</h1>
      <p>
        Thanks for applying for membership. As soon as your application has been reviewed and approved you will receive an email
        confirming your access status and grant or deny you access as a Client/Advisor
      </p>
      <Nav to={CLIENTS}>
        <button>Go to home page</button>
      </Nav>
    </div>
  );
};

export default SignUpConfirmSuccess;
