import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import { resetUserPassword } from '../../data/store/user/userActions';
import MainButton from '../MainButton';
import Loading from '../Loading';

const ResetPassword = ({ history }) => {
  const dispatch = useDispatch();
  const [confirmPasswordForm, setConfirmPasswordForm] = useState({ password: '', confirmPassword: '' });
  const isLoading = useSelector(state => state.userReducer.isLoading);
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
  }, [dispatch, setConfirmPasswordForm]);

  const checkboxHandler = useCallback((e) => {
    const { checked } = e.target;
    if (checked) {
      setShowPassword('text');
    } else {
      setShowPassword('password');
    }
  }, []);

  return (
    <Loading loading={isLoading}>
    <form method='post' className='reset-container' onSubmit={onSubmit}>
      <h2>Your new password</h2>
      <label htmlFor='password'>Password</label>
      <input name='password' id='password' type={showPassword} value={password} onChange={onChangeHandler}/>

      <label htmlFor='confirmPassword'>Confirm password</label>
      <input name='confirmPassword' id='confirmPassword' type={showPassword} value={confirmPassword} onChange={onChangeHandler}/>

      <div className='checkbox-show-password-container'>
        <input name='showPassword' id='showPassword' type='checkbox' onChange={checkboxHandler}/>
        <label htmlFor='showPassword'>Show Password</label>
      </div>

      <MainButton
        type="submit"
        disabled={passwordValidation()}>
        Change password
      </MainButton>
    </form>
    </Loading>
  );
};

export default ResetPassword;

ResetPassword.propTypes = {
  history: PropTypes.object
};
