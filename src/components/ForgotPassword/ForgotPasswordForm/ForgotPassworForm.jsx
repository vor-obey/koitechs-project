/*eslint-disable*/
import React, { useCallback, useState } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../../data/store/user/userActions';
import { LOGIN } from '../../../constants/routes';
import BackToSignUp from '../../BackToSignUp';
import { useHistory } from 'react-router';
import MainButton from '../../MainButton';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { forgotPasswordValidation } from '../../../helpers/validation';

const style = { color: 'red', position: 'absolute', top: 65, fontSize: 14};

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = useCallback((e) => {
    e.preventDefault();
    history.push(LOGIN);
  }, [history]);

  const onInputChangedHandler = useCallback((event) => {
    const { value } = event.target;
    setEmail(value);
  }, []);

  const onSubmit = useCallback((fields) => {
    dispatch(forgotPassword(fields));

    setEmail('');
  }, [dispatch]);

  return (
    <>
      <Formik initialValues={{ email: '' }} onSubmit={(fields) => onSubmit(fields)} validationSchema={forgotPasswordValidation}>
        <Form className='forgotpassword-wrapper'>
          <h2>Forgot password?</h2>
          <div className='forgotpassword-container'>
            <label htmlFor='email'>Email</label>
            <Field type="email" placeholder='email' id='email' name='email'/>
            <ErrorMessage
              component='div'
              name='email'
              style={style}
            />
          </div>

          <MainButton disabled type="submit">Send</MainButton>

          <a onClick={handleClick}>Back to the login</a>
        </Form>
      </Formik>
      <BackToSignUp />
    </>
  );
};

export default ForgotPasswordForm;
