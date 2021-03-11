import React from 'react';
import { useSelector } from 'react-redux';

import SignUpForm from './SignUpForm';
import { CHANGE_EMAIL, PENDING, SUCCESS } from '../../constants/authStatus';
import SignUpConfirm from './SignUpConfirm';
import SignUpConfirmSuccess from './SignUpConfirmSuccess';
import ChangeEmail from './SendEmail/ChangeEmail';
import Loading from '../Loading';

const SignUp = () => {
  const status = useSelector(state => state.userReducer.auth.status);
  const isLoading = useSelector(state => state.userReducer.isLoading);

  const renderComponent = () => {
    if (status === PENDING) {
      return <SignUpConfirm />;
    }
    if (status === SUCCESS) {
      return <SignUpConfirmSuccess />;
    }
    if (status === CHANGE_EMAIL) {
      return <ChangeEmail />;
    }
    return <SignUpForm />;
  };

  return (
    <Loading loading={isLoading}>
      {renderComponent()}
    </Loading>
  );
};

export default SignUp;
