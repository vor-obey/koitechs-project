import React from 'react';
import ForgotPasswordForm from './ForgotPasswordForm';
import ForgotPasswordConfirmation from './ForgotPasswordConfirmation';
import { useSelector } from 'react-redux';

const ForgotPassword = (props) => {
  const confirmStepForForgotPassword = useSelector(state => state.userReducer.confirmStep);

  return (
    confirmStepForForgotPassword ? <ForgotPasswordConfirmation {...props} /> : <ForgotPasswordForm {...props} />
  );
};

export default ForgotPassword;
