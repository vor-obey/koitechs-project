import React from 'react';
import { useSelector } from 'react-redux';

import SignUpForm from './SignUpForm';
import { PENDING, SUCCESS } from '../../constants/authStatus';
import SignUpConfirm from './SignUpConfirm';
import SignUpConfirmSuccess from './SignUpConfirmSuccess';

const SignUp = () => {
  const status = useSelector(state => state.userReducer.auth.status);

  const renderComponent = () => {
    if (status === PENDING) {
      return <SignUpConfirm />;
    }
    if (status === SUCCESS) {
      return <SignUpConfirmSuccess />;
    }
    return <SignUpForm />;
  };

  return (renderComponent());
};

export default SignUp;
