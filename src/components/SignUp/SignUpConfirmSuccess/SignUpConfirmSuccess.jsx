import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { LOGIN } from '../../../constants/routes';
import './style.css';

const SignUpConfirmSuccess = () => {
  const history = useHistory();

  const goClientPage = useCallback(() => {
    history.push(LOGIN);
  }, [history]);

  return (
    <div className='sign-up-success'>
      <h1>You are done</h1>
      <p>
        Thanks for applying for membership. As soon as your application has been reviewed and approved you will receive an email
        confirming your access status and grant or deny you access as a Client/Advisor
      </p>
        <button onClick={goClientPage}>Go to home page</button>
    </div>
  );
};

export default SignUpConfirmSuccess;
