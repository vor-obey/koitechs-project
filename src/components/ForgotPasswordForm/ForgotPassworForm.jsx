import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../data/store/user/userActions';

const ForgotPasswordForm = ({ history }) => {
  const [email, setEmail] = useState();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.userReducer.isLoading);

  const renderButtonText = loading ? 'LOADING' : 'SEND';

  const handleClick = useCallback((e) => {
    e.preventDefault();
    history.push('/');
  }, [history]);

  const onInputChangedHandler = useCallback((event) => {
    const { value } = event.target;
    setEmail(value);
  }, []);

  const onSubmitHandler = useCallback((e) => {
    e.preventDefault();

    dispatch(forgotPassword(email));

    setEmail('');
  }, [dispatch]);

  return (
    <form className='forgotpassword-wrapper'>
      <p>Forgot password?</p>
      <div className='forgotpassword-container'>
        <label htmlFor='email'>Email</label>
        <input type="email" placeholder='email' onChange={onInputChangedHandler}/>
      </div>

      <input type="submit" value={renderButtonText} onClick={onSubmitHandler} />

      <a onClick={handleClick}>Back to the login</a>
    </form>
  );
};

export default ForgotPasswordForm;

ForgotPasswordForm.propTypes = {
  history: PropTypes.object
};
