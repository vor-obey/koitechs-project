import React, { useCallback } from 'react';
import { emailValidation } from '../../../helpers/validation';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';

import './style.scss';
import { changeEmail } from '../../../data/store/user/userActions';
import MainButton from '../../MainButton';

const style = { color: 'red', position: 'absolute', top: 60, fontSize: 14 };

const ChangeEmail = () => {
  const dispatch = useDispatch();

  const onSubmit = useCallback((fields) => {
    dispatch(changeEmail(fields));
  }, [dispatch]);

  return (
    <Formik initialValues={{ email: '' }} onSubmit={(fields) => onSubmit(fields)} validationSchema={emailValidation}>
      <Form className='send-email-block'>
        <h3>Send confirmation email again</h3>
        <div className='send-email-input-block'>
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
        <MainButton type='submit'>Send</MainButton>
      </Form>
    </Formik>
  );
};

export default ChangeEmail;
