import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { login } from '../../data/store/user/userActions';
import './style.css';
import { NavLink as Nav, useHistory } from 'react-router-dom';
import { FORGOT_PASSWORD, SIGN_UP } from '../../constants/routes';

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: '', password: '' });
  const loading = useSelector(state => state.userReducer.isLoading);

  const renderButtonText = loading ? 'LOADING' : 'SEND';

  const handleClick = useCallback((e) => {
    e.preventDefault();
    history.push(FORGOT_PASSWORD);
  }, [history]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(login({
      form,
      history
    }));

    setForm({ email: '', password: '' });
  }, []);

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form action="" method='post' className='sign-in-container'>
      <div className='input-container'>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" onChange={onChangeHandler} value={form.email} />

        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" onChange={onChangeHandler} value={form.password}/>
      </div>

      <div className='checkbox-container'>
        <div className='checkbox-forgotpassword'>
          <input type='checkbox' name='rememberEmail' id='rememberEmail' onChange={onChangeHandler} />
          <label htmlFor='rememberEmail'>Remember my email</label>
        </div>

        <a onClick={handleClick}>Forgot password?</a>
      </div>

      <input type="submit" value={renderButtonText} className='submit-button' onClick={onSubmit} />
      <div>
        <p>
          Never give out your login credentials and never
          log in at the request of someone who contacts you.
        </p>
        <p>Do you not have an account?</p>
        <Nav to={SIGN_UP}>Create an account</Nav>
      </div>
    </form>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  history: PropTypes.object
};
