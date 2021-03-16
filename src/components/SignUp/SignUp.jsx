import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SignUpForm from './SignUpForm';
import { CHANGE_EMAIL, PENDING, SUCCESS } from '../../constants/authStatus';
import SignUpConfirm from './SignUpConfirm';
import SignUpConfirmSuccess from './SignUpConfirmSuccess';
import ChangeEmail from './SendEmail/ChangeEmail';
import Loading from '../Loading';
import { setLabel } from '../../data/store/helpers/auxiliaryActions';
import { useHistory } from 'react-router';

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const status = useSelector(state => state.userReducer.auth.status);
  const isLoading = useSelector(state => state.userReducer.isLoading);

  useEffect(() => {
    dispatch(setLabel(history.location.pathname));
  }, [history]);

  const renderComponent = {
    [PENDING]: <SignUpConfirm />,
    [SUCCESS]: <SignUpConfirmSuccess />,
    [CHANGE_EMAIL]: <ChangeEmail />,
    '': <SignUpForm />
  };

  return (
    <Loading loading={isLoading}>
      {renderComponent[status]}
    </Loading>
  );
};

export default SignUp;
