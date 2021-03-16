import React, { useCallback, useState, useEffect } from 'react';
import { emailRules } from '../../../helpers/validation';
import { useDispatch } from 'react-redux';

import './style.scss';
import { changeEmail } from '../../../data/store/user/userActions';
import MainButton from '../../MainButton';
import { Input, Form, Typography, Row } from 'antd';

const { Title } = Typography;

const ChangeEmail = () => {
  const dispatch = useDispatch();

  const onSubmit = useCallback((email) => {
    dispatch(changeEmail(email));
  }, [dispatch]);

  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  return (
    <Row className='send-email-wrapper'>
    <Form form={form} name="horizontal_login" layout="vertical" onFinish={onSubmit} className='send-email-block'>
        <Title level={3}>Send confirmation email again</Title>
        <Row className='send-email-input-block'>
          <Form.Item
            label='Email address'
            name="email"
            rules={emailRules}
          >
            <Input placeholder="Email" size='large' />
          </Form.Item>
        </Row>
      <Form.Item shouldUpdate>
        {() => (
          <MainButton
            type='submit'
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Register
          </MainButton>
        )}
      </Form.Item>
    </Form>
    </Row>
  );
};

export default ChangeEmail;
