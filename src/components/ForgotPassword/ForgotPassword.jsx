import React from 'react';
import ForgotPasswordForm from './ForgotPasswordForm';
import ForgotPasswordConfirmation from './ForgotPasswordConfirmation';
import { useSelector } from 'react-redux';
import Loading from '../Loading';
import { CONFIRMATION, PENDING } from '../../constants/authStatus';
import ResetPassword from '../ResetPassword';

const ForgotPassword = () => {
  const status = useSelector(state => state.userReducer.forgotPassword.status);
  const isLoading = useSelector(state => state.userReducer.isLoading);
  console.log(status);

  const renderComponent = () => {
    if (status === PENDING) {
      return <ForgotPasswordConfirmation />;
    }
    if (status === CONFIRMATION) {
      return <ResetPassword />;
    }
    return <ForgotPasswordForm />;
  };

  return (
    <Loading loading={isLoading}>
      {renderComponent()}
    </Loading>
  );
};

export default ForgotPassword;
