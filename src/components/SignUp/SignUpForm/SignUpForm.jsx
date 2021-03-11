import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { signUp } from '../../../data/store/user/userActions';
import './style.scss';
import { NavLink } from 'react-router-dom';
import MainButton from '../../MainButton';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { signUpValidation } from '../../../helpers/validation';

const style = { color: 'red', position: 'absolute', top: 60, fontSize: 14 };

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState('password');
  const [agreement, setAgreement] = useState(false);

  const initialValues = {
    role: 'advisor',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirm: ''
  };

  const onChangeCheckbox = useCallback((e) => {
    setAgreement(e.target.checked);
  }, [setAgreement]);

  const checkboxHandler = useCallback((e) => {
    const { checked } = e.target;
    if (checked) {
      setShowPassword('text');
    } else {
      setShowPassword('password');
    }
  }, []);

  const onSubmit = useCallback((fields) => {
    console.log(fields);
    dispatch(signUp(fields));
  }, [dispatch]);

  return (
    <Formik initialValues={initialValues} onSubmit={(fields) => onSubmit(fields)} validationSchema={signUpValidation}>
      <Form className="sign-up-container">
        <div>
          <h4>Role*</h4>
          <div className='radio-input-block'>
            <div>
              <Field type="radio" name="role" id="client" disabled />
              <label htmlFor="role">Client</label>
            </div>

            <div>
              <Field type="radio" name="role" id="advisor" checked />
              <label htmlFor="role">Advisor</label>
            </div>
          </div>
        </div>

        <div className="sign-up-wrapper">
          <h4>Name</h4>
          <div className='sign-up-input-block'>
          <label htmlFor="firstName">First Name</label>
          <Field
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First name..."
          />
          <ErrorMessage
            component='div'
            name='firstName'
            style={style}
          />
          </div>

          <div className='sign-up-input-block'>
          <label htmlFor="lastName">Last Name</label>
          <Field
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last name..."
          />
          <ErrorMessage
            component='div'
            name='lastName'
            style={style}
          />
          </div>
        </div>

        <div className="sign-up-wrapper">
          <h4>Contact Information</h4>
          <div className='sign-up-input-block'>
          <label htmlFor="email">Email address</label>
          <Field
            type="text"
            name="email"
            id="email"
            placeholder="Email..."
          />
          <ErrorMessage
            component='div'
            name='email'
            style={style}
          />
          </div>

          <div className='sign-up-input-block'>
          <label htmlFor="phone">Mobile Phone</label>
          <Field
            type="phone"
            name="phone"
            id="phone"
            placeholder="Phone..."
          />
          <ErrorMessage
            component='div'
            name='phone'
            style={style}
          />
          </div>
        </div>

        <div className="sign-up-wrapper">
          <h4>Password</h4>
          <div className='sign-up-input-block'>
          <label htmlFor="password">Password</label>
          <Field
            type={showPassword}
            name="password"
            id="password"
            placeholder="Password..."
          />
          <ErrorMessage
          component='div'
          name='password'
          style={style}
          />
          </div>

          <div className='sign-up-input-block'>
          <label htmlFor="passwordConfirm">Confirm password</label>
          <Field
            type={showPassword}
            name="passwordConfirm"
            id="passwordConfirm"
            placeholder="Confirm password"
          />
          <ErrorMessage
            component='div'
            name='passwordConfirm'
            style={style}
          />
          </div>

          <ul>
            <li>At least 8 characters</li>
            <li>At least one lower case character</li>
            <li>At least one capital letter</li>
            <li>At least one special character ~@#$%^& </li>
          </ul>
        </div>

        <div className='checkbox-show-password-block'>
          <input
            type="checkbox"
            id="showPassword"
            name="showPassword"
            onChange={checkboxHandler}
          />
          <label htmlFor="showPassword">Show password</label>
        </div>

        <div>
          <h4>Terms and conditions agreement</h4>

          <NavLink to='#'>User term and conditions</NavLink>

          <div className='agreement-block sign-up-input-block'>
            <Field type="checkbox" name="agreement" id="agreement" onChange={onChangeCheckbox} checked={agreement} value={agreement}/>
            <label htmlFor="agreement">
              I have read, understood and agree to the above terms and conditions
            </label>
            <ErrorMessage
            component='div'
            style={style}
            name='agreement'
            />
          </div>
        </div>
        <MainButton type='submit' disabled={agreement}>Register</MainButton>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
