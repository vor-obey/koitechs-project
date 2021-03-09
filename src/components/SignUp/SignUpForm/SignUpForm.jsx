import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { signUp } from '../../../data/store/user/userActions';
import './style.css';

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

      dispatch(signUp({ signUpForm, history }));

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
    <form action="" method="post" className="sign-up-container">
      <div>
        <h2>Role*</h2>
        <label htmlFor="role">Client</label>
        <input type="radio" name="role" id="client" disabled />

        <label htmlFor="role">Advisor</label>
        <input type="radio" name="role" id="advisor" checked />
      </div>

      <div className="sign-up-wrapper">
        <h2>Name</h2>
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
        <h2>Contact Information</h2>
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
        <h2>Contact Information</h2>
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

      <input
        type="checkbox"
        id="showPassword"
        name="showPassword"
        onChange={checkboxHandler}
      />
      <label htmlFor="showPassword">Show password</label>

      <div>
        <h2>Terms and conditions agreement</h2>

        <label htmlFor="agreement">
          I have read, understood and agree to the above terms and conditions
        </label>
        <input type="checkbox" name="agreement" id="agreement" />
      </div>

      <button type="submit" onClick={onSubmit}>
        Register
      </button>
    </form>
  );
};

export default SignUpForm;

SignUpForm.propTypes = {
  history: PropTypes.object
};
