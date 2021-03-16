import React, { useCallback, useState, useEffect } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../../data/store/user/userActions';
import { LOGIN } from '../../../constants/routes';
import BackToSignUp from '../../BackToSignUp';
import { emailRules } from '../../../helpers/validation';
import { Form, Input, Row, Typography } from 'antd';
import MainButton from '../../MainButton';
import { NavLink as Nav } from 'react-router-dom';

const { Text } = Typography;

const ForgotPasswordForm = () => {
  const dispatch = useDispatch();

  const onSubmit = useCallback((fields) => {
    dispatch(forgotPassword(fields));
  }, [dispatch]);

  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  return (
    <Row className='forgot-password-wrapper'>
      <Form form={form} name="horizontal_login" layout="vertical" onFinish={onSubmit} className='forgot-password-form'>
        <h2>Forgot password?</h2>
        <div className='forgot-password-container'>
          <Form.Item
            label='Email'
            name="email"
            rules={emailRules}
          >
            <Input placeholder="Email" />
          </Form.Item>
        </div>

        <Form.Item shouldUpdate>
          {() => (
            <MainButton
              type="submit"
              disabled={
                !form.isFieldsTouched(true) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length).length
              }
            >
              Send email
            </MainButton>
          )}
        </Form.Item>
        <Nav to={LOGIN}><Text strong>Back to the login</Text></Nav>
        <BackToSignUp />
      </Form>
    </Row>
  );
};

export default ForgotPasswordForm;
