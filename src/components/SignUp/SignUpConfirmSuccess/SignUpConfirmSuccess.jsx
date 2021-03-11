import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { LOGIN } from '../../../constants/routes';
import './style.scss';
import MainButton from '../../MainButton';
import { useDispatch } from 'react-redux';
import { SIGN_UP_USER_SUCCESS } from '../../../data/store/user/userActionTypes';

const SignUpConfirmSuccess = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const goClientPage = useCallback(() => {
    dispatch({ type: SIGN_UP_USER_SUCCESS });
    history.push(LOGIN);
  }, [history, dispatch]);

  return (
    <div className='sign-up-success'>
      <h1>You are done</h1>
      <p>
        Thanks for applying for membership. As soon as your application has been reviewed and approved you will receive an email
        confirming your access status and grant or deny you access as a Client/Advisor
      </p>
        <MainButton disabled onClick={goClientPage}>Go to home page</MainButton>
    </div>
  );
};

export default SignUpConfirmSuccess;
