import React from 'react';
import ForgotPasswordForm from './ForgotPasswordForm';
import ForgotPasswordConfirmation from './ForgotPasswordConfirmation';
import { useSelector } from 'react-redux';
import Loading from '../Loading';

const ForgotPassword = (props) => {
  const confirmStepForForgotPassword = useSelector(state => state.userReducer.confirmStep);
  const isLoading = useSelector(state => state.userReducer.isLoading);

  return (
    <Loading loading={isLoading}>
      {confirmStepForForgotPassword ? <ForgotPasswordConfirmation {...props} /> : <ForgotPasswordForm {...props} />}
    </Loading>
  );
};

export default ForgotPassword;
