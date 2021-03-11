/*eslint-disable*/
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { login } from '../../data/store/user/userActions';
import './style.scss';
import { NavLink as Nav, useHistory } from 'react-router-dom';
import { FORGOT_PASSWORD, SIGN_UP } from '../../constants/routes';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { loginValidation } from '../../helpers/validation';
import MainButton from '../MainButton';
import Loading from '../Loading';

const style = { color: 'red', position: 'absolute', top: 65, fontSize: 14};

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [activeBtn, isActiveBtn] = useState('Email');
  const isLoading = useSelector(state => state.userReducer.isLoading);


  const setButtonValue = () => {
    if(activeBtn === 'Email') {
      isActiveBtn('BankID');
    } else {
      isActiveBtn('Email')
    }
  }

  const buttonStyle = activeBtn === 'Email' ? 'switcher active' : 'switcher';

  const handleClick = useCallback((e) => {
    e.preventDefault();
    history.push(FORGOT_PASSWORD);
  }, [history]);

  const onSubmit = useCallback((fields) => {
    dispatch(login({ fields, history }));
  }, [history]);

  return (
    <Loading loading={isLoading}>
      <Formik initialValues={{ email: '', password: '', remember: false }} onSubmit={(fields) => onSubmit(fields)} validationSchema={loginValidation}>
        <Form className='sign-in-container'>
          <div className='input-container'>
            <div className='radio-bth'>
              <label htmlFor="method-bankId" onClick={setButtonValue}>BankId</label>
              <input type="radio" name='method' id='method-bankId' value='bankId'/>

              <label htmlFor="method-email" onClick={setButtonValue}>Email</label>
              <input type="radio" name='method' id='method-email' value='email'/>
              <div className={buttonStyle}>{activeBtn}</div>
            </div>
            <div className='sign-in-block'>
              <label htmlFor="email">Email</label>
              <Field id="email" type="email" name="email"/>
              <ErrorMessage
                name='email'
                component='div'
                style={style}
              />
            </div>

            <div className='sign-in-block'>
              <label htmlFor="password">Password</label>
              <Field id="password" type="password" name="password"/>
              <ErrorMessage
                name='password'
                component='div'
                style={style}
              />
            </div>
          </div>

          <div className='checkbox-container'>
            <div className='checkbox-forgotpassword'>
              <Field type='checkbox' name='remember' id='remember' />
              <label htmlFor='remember'>Remember my email</label>
            </div>

            <a onClick={handleClick}>Forgot password?</a>
          </div>

          <MainButton disabled type="submit">Send</MainButton>
          <div>
            <p>
              Never give out your login credentials and never
              log in at the request of someone who contacts you.
            </p>
            <p>Do you not have an account?</p>
            <Nav to={SIGN_UP}>Create an account</Nav>
          </div>
        </Form>
      </Formik>
    </Loading>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  history: PropTypes.object
};
