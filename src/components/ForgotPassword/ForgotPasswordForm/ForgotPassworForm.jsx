import React, { useCallback } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../../data/store/user/userActions';
import { LOGIN } from '../../../constants/routes';
import BackToSignUp from '../../BackToSignUp';
import { useHistory } from 'react-router';
import MainButton from '../../MainButton';
import { useFormik } from 'formik';
import { emailValidation, onDisable } from '../../../helpers/validation';

const style = { color: 'red', position: 'absolute', top: 65, fontSize: 14 };

const ForgotPasswordForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = useCallback((e) => {
    e.preventDefault();
    history.push(LOGIN);
  }, [history]);

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: emailValidation,
    onSubmit: fields => onSubmit(fields)
  });

  const { values, isValid } = formik;

  const disableBtn = useCallback(() => onDisable(values, isValid), [values, isValid]);

  const onSubmit = useCallback((fields) => {
    dispatch(forgotPassword(fields));
  }, [dispatch]);

  return (
    <>
      <form className='forgotpassword-wrapper' onSubmit={formik.handleSubmit}>
        <h2>Forgot password?</h2>
        <div className='forgotpassword-container'>
          <label htmlFor='email'>Email</label>
          <input
            type="email"
            placeholder='email'
            id='email'
            name='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email
            ? (
            <div style={style}>{formik.errors.email}</div>
              )
            : null}
        </div>

        <MainButton disabled={!disableBtn()} type="submit">Send</MainButton>

        <a onClick={handleClick}>Back to the login</a>
      </form>
      <BackToSignUp />
    </>
  );
};

export default ForgotPasswordForm;
