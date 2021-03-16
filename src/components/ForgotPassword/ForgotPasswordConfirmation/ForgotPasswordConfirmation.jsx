import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { useDispatch } from 'react-redux';
import { clearConfirmStep } from '../../../data/store/user/userActions';
import { LOGIN } from '../../../constants/routes';
import BackToSignUp from '../../BackToSignUp';
import MainButton from '../../MainButton';
import { SIMULATE_CLICK_ON_LINK } from '../../../data/store/user/userActionTypes';
import { useHistory } from 'react-router';

const ForgotPasswordConfirmation = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = useCallback((e) => {
    e.preventDefault();
    history.push(LOGIN);
  }, [history]);

  useEffect(() => {
    return () => dispatch(clearConfirmStep());
  });

  const onSimulate = useCallback(() => {
    dispatch({ type: SIMULATE_CLICK_ON_LINK });
  }, [dispatch]);

  return (
    <>
      <div className='forgot-password-confirm'>
        <p>
          We have sent instructions or resetting you password XXXXXXXXXXXX@XXXXX.XXX
        </p>
        <h3>
          No email from us?
        </h3>
        <ol>
          <li>Check your spam folder</li>
          <li>Check your spelling</li>
          <li>Wait 15 minutes and try again</li>
        </ol>
        <a onClick={handleClick}>Back to the login</a>
      </div>
      <BackToSignUp />
      <MainButton onClick={onSimulate}>Simulate send message</MainButton>
    </>
  );
};

export default ForgotPasswordConfirmation;

ForgotPasswordConfirmation.propTypes = {
  history: PropTypes.object
};
