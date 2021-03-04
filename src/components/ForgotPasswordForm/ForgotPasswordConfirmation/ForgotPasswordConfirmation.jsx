import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { useDispatch } from 'react-redux';
import { clearConfirmStep } from '../../../data/store/user/userActions';
import { LOGIN } from '../../../constants/routes';

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
    <div className='fgps'>
      <p>Text</p>
      <p>Text</p>
      <p>Text</p>
      <p>Text</p>
      <p>Text</p>
      <p>Text</p>
      <p>Text</p>
      <p>Text</p>
      <p>Text</p>
      <a onClick={handleClick}>Back to the login</a>
    </div>
  );
};

export default ForgotPasswordConfirmation;

ForgotPasswordConfirmation.propTypes = {
  history: PropTypes.object
};
