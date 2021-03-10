import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { signUp } from '../../../data/store/user/userActions';
import './style.scss';
import { NavLink } from 'react-router-dom';
import MainButton from '../../MainButton';

const SignUpForm = ({ history }) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState('password');
  const [signUpForm, setSignUpForm] = useState({
    role: 'advisor',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setSignUpForm({ ...signUpForm, [name]: value });
  };

  const checkboxHandler = useCallback((e) => {
    const { checked } = e.target;
    if (checked) {
      setShowPassword('text');
    } else {
      setShowPassword('password');
    }
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(signUp(signUpForm));

      setSignUpForm({
        role: 'advisor',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
      });
    },
    [dispatch, signUpForm]
  );

  return (
    <form action="" method="post" className="sign-up-container" onSubmit={onSubmit}>
      <div>
        <h4>Role*</h4>
        <div className='radio-input-block'>
          <div>
            <input type="radio" name="role" id="client" disabled />
            <label htmlFor="role">Client</label>
          </div>

          <div>
            <input type="radio" name="role" id="advisor" checked />
            <label htmlFor="role">Advisor</label>
          </div>
        </div>
      </div>

      <div className="sign-up-wrapper">
        <h4>Name</h4>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First name..."
          onChange={onChangeHandler}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last name..."
          onChange={onChangeHandler}
        />
      </div>

      <div className="sign-up-wrapper">
        <h4>Contact Information</h4>
        <label htmlFor="email">Email address</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email..."
          onChange={onChangeHandler}
        />

        <label htmlFor="phone">Mobile Phone</label>
        <input
          type="phone"
          name="phone"
          id="phone"
          placeholder="Phone..."
          onChange={onChangeHandler}
        />
      </div>

      <div className="sign-up-wrapper">
        <h4>Contact Information</h4>
        <label htmlFor="password">Password</label>
        <input
          type={showPassword}
          name="password"
          id="password"
          placeholder="Password..."
          onChange={onChangeHandler}
        />

        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          type={showPassword}
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm password"
          onChange={onChangeHandler}
        />
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

        <div className='agreement-block'>
          <input type="checkbox" name="agreement" id="agreement" />
          <label htmlFor="agreement">
            I have read, understood and agree to the above terms and conditions
          </label>
        </div>
      </div>
      <MainButton type='submit'>Register</MainButton>
    </form>
  );
};

export default SignUpForm;

SignUpForm.propTypes = {
  history: PropTypes.object
};
