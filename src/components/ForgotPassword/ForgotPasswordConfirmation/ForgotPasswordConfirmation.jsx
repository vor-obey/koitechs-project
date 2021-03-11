import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { useDispatch } from 'react-redux';
import { clearConfirmStep } from '../../../data/store/user/userActions';
import { LOGIN, RESET_PASSWORD } from '../../../constants/routes';
import BackToSignUp from '../../BackToSignUp';
import MainButton from '../../MainButton';

const ForgotPasswordConfirmation = ({ history }) => {
  const dispatch = useDispatch();

  const handleClick = useCallback((e) => {
    e.preventDefault();
    history.push(LOGIN);
  }, [history]);

  useEffect(() => {
    return () => dispatch(clearConfirmStep());
  });

  const onSimulate = useCallback(() => {
    history.push(RESET_PASSWORD);
  }, [history]);

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
      <MainButton disabled onClick={onSimulate}>Simulate send message</MainButton>
    </>
  );
};

export default ForgotPasswordConfirmation;

ForgotPasswordConfirmation.propTypes = {
  history: PropTypes.object
};
