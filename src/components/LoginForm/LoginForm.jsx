import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const LoginForm = ({ history }) => {
  const handleClick = useCallback((e) => {
    e.preventDefault();
    history.push('/forgot-password');
  }, [history]);

  return (
    <form action="" method='post' className='sign-in-container'>
      <div className='input-container'>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />

        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" />
      </div>

      <div className='checkbox-container'>
        <div className='checkbox-forgotpassword'>
          <input type='checkbox' name='rememberEmail' id='rememberEmail' />
          <label htmlFor='rememberEmail'>Remember my email</label>
        </div>

        <a onClick={handleClick}>Forgot password?</a>
      </div>

      <input type="submit" value="Save" className='submit-button' />
    </form>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  history: PropTypes.string
};
