import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import { resetUserPassword } from '../../data/store/user/userActions';
import MainButton from '../MainButton';
import Loading from '../Loading';
import { useFormik } from 'formik';
import { confirmPasswordValidation, onDisable } from '../../helpers/validation';
import { useHistory } from 'react-router';

const style = { color: 'red', position: 'absolute', top: 60, fontSize: 14 };

const ResetPassword = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.userReducer.isLoading);
  const [showPassword, setShowPassword] = useState('password');

  const formik = useFormik({
    initialValues: {
      password: '',
      passwordConfirm: ''
    },
    validationSchema: confirmPasswordValidation,
    onSubmit: fields => onSubmit(fields)
  });

  const { values, isValid } = formik;

  const disableBtn = useCallback(() => onDisable(values, isValid), [values, isValid]);

  const onSubmit = useCallback((fields) => {
    dispatch(resetUserPassword({ fields, history }));
  }, [dispatch]);

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
    <form method='post' className='reset-container' onSubmit={formik.handleSubmit}>
      <h2>Your new password</h2>
      <div className='reset-input-container'>
      <label htmlFor='password'>Password</label>
      <input
        name='password'
        id='password'
        type={showPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password
        ? (
          <div style={style}>{formik.errors.password}</div>
          )
        : null}
      </div>

      <div className='reset-input-container'>
      <label htmlFor='passwordConfirm'>Confirm password</label>
      <input
        name='passwordConfirm'
        id='passwordConfirm'
        type={showPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.passwordConfirm}
      />
      {formik.touched.passwordConfirm && formik.errors.passwordConfirm
        ? (
          <div style={style}>{formik.errors.passwordConfirm}</div>
          )
        : null}
      </div>

      <div className='checkbox-show-password-container'>
        <input name='showPassword' id='showPassword' type='checkbox' onChange={checkboxHandler}/>
        <label htmlFor='showPassword'>Show Password</label>
      </div>

      <MainButton
        type="submit"
        disabled={!disableBtn()}>
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
