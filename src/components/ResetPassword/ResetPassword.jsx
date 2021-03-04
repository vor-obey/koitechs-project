import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import './style.css';
import { resetUserPassword } from '../../data/store/user/userActions';

const ResetPassword = ({ history }) => {
  const dispatch = useDispatch();
  const [confirmPasswordForm, setConfirmPasswordForm] = useState({ password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState('password');
  const { password, confirmPassword } = confirmPasswordForm;

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setConfirmPasswordForm({ ...confirmPasswordForm, [name]: value });
  };

  const passwordValidation = useCallback(() => {
    return password === confirmPassword;
  }, [confirmPasswordForm]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(resetUserPassword({ ...confirmPasswordForm, history }));
    setConfirmPasswordForm({ password: '', confirmPassword: '' });
  }, []);

  const renderButtonText = passwordValidation() ? 'Change password' : 'Password mismatch';

  const checkboxHandler = useCallback((e) => {
    const { checked } = e.target;
    if (checked) {
      setShowPassword('text');
    } else {
      setShowPassword('password');
    }
  }, []);

  return (
    <form method='post' className='reset-container'>
      <label htmlFor='password'>Password</label>
      <input name='password' id='password' type={showPassword} value={password} onChange={onChangeHandler}/>

      <label htmlFor='confirmPassword'>Confirm password</label>
      <input name='confirmPassword' id='confirmPassword' type={showPassword} value={confirmPassword} onChange={onChangeHandler}/>

      <input name='showPassword' id='showPassword' type='checkbox' onChange={checkboxHandler}/>
      <label htmlFor='showPassword'>Show Password</label>

      <button
        type="submit"
        disabled={!passwordValidation()}
        onClick={onSubmit}>
        {renderButtonText}
      </button>
    </form>
  );
};

export default ResetPassword;

ResetPassword.propTypes = {
  history: PropTypes.object
};
