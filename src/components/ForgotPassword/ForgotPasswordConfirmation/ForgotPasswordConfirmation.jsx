import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { useDispatch } from 'react-redux';
import { clearConfirmStep } from '../../../data/store/user/userActions';
import { LOGIN } from '../../../constants/routes';
import BackToSignUp from '../../BackToSignUp';

const ForgotPasswordConfirmation = ({ history }) => {
  const dispatch = useDispatch();

  const handleClick = useCallback((e) => {
    e.preventDefault();
    history.push(LOGIN);
  }, [history]);

  useEffect(() => {
    return () => dispatch(clearConfirmStep());
  });

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
    </>
  );
};

export default ForgotPasswordConfirmation;

ForgotPasswordConfirmation.propTypes = {
  history: PropTypes.object
};
