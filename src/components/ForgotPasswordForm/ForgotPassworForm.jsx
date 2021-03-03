import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ForgotPasswordForm = ({ history }) => {
  const handleClick = useCallback((e) => {
    e.preventDefault();
    history.push('/');
  }, [history]);

  return (
    <form className='forgotpassword-wrapper'>
      <p>Forgot password?</p>
      <div className='forgotpassword-container'>
        <label htmlFor='email'>Email</label>
        <input type="email" placeholder='email'/>
      </div>

      <input type="submit" value="Send" />

      <a onClick={handleClick}>Back to the login</a>
    </form>
  );
};

export default ForgotPasswordForm;

ForgotPasswordForm.propTypes = {
  history: PropTypes.string
};
