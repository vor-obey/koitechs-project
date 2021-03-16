import React, { useEffect } from 'react';
import ForgotPasswordForm from './ForgotPasswordForm';
import ForgotPasswordConfirmation from './ForgotPasswordConfirmation';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Loading';
import { CONFIRMATION, PENDING } from '../../constants/authStatus';
import ResetPassword from '../ResetPassword';
import { setLabel } from '../../data/store/helpers/auxiliaryActions';
import { useHistory } from 'react-router';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const status = useSelector(state => state.userReducer.forgotPassword.status);
  const isLoading = useSelector(state => state.userReducer.isLoading);

  useEffect(() => {
    dispatch(setLabel(history.location.pathname));
  }, [history]);

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
