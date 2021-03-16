import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { signUp } from '../../../data/store/user/userActions';
import './style.scss';
import { NavLink as Nav } from 'react-router-dom';
import {
  confirmPassRules,
  emailRules,
  nameRules,
  numberRules,
  passwordRules
} from '../../../helpers/validation';
import { Form, Input, Row, Checkbox, Typography, Radio } from 'antd';
import MainButton from '../../MainButton';

const { Title } = Typography;

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState('password');
  const [type, setType] = React.useState('advisor');

  const onChangeType = (e) => {
    console.log('radio checked', e.target.value);
    setType(e.target.value);
  };

  const checkboxHandler = useCallback((e) => {
    const { checked } = e.target;
    if (checked) {
      setShowPassword('text');
    } else {
      setShowPassword('password');
    }
  }, [showPassword]);

  const onSubmit = useCallback((fields) => {
    const { agreement, ...data } = fields;
    dispatch(signUp({ ...data, role: type }));
    console.log({ ...data, role: type });
  }, [dispatch]);

  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  return (
    <Row className='sign-up-row'>
        <Form form={form} name="horizontal_login" layout="vertical" onFinish={onSubmit} className='sign-up-container'>
        <div>
          <Title level={4}>Role*</Title>
          <Radio.Group onChange={onChangeType} value={type} className='radio-input-block'>
            <Radio value='client' disabled>Client</Radio>
            <Radio value='advisor'>Advisor</Radio>
          </Radio.Group>
        </div>

        <div className="sign-up-wrapper">
          <Title level={4}>Name</Title>
            <Form.Item
              label='First name'
              name="firstName"
              rules={nameRules}
            >
              <Input placeholder="First name" />
            </Form.Item>

          <Form.Item
              label='Last name'
              name="lastName"
              rules={nameRules}
            >
              <Input placeholder="Last name" />
            </Form.Item>
        </div>

          <div className="sign-up-wrapper">
            <Title level={4}>Email</Title>
            <Form.Item
              label='Email'
              name="email"
              rules={emailRules}
            >
              <Input placeholder="Email" />
            </Form.Item>
          </div>

          <div className="sign-up-wrapper">
            <Title level={4}>Phone</Title>
            <Form.Item
              label='Phone'
              name="phone"
              rules={numberRules}
            >
              <Input placeholder="Phone" />
            </Form.Item>
          </div>

          <div className="sign-up-wrapper">
            <Title level={4}>Password</Title>
            <Form.Item
              label='Password'
              name="password"
              rules={passwordRules}
            >
              <Input placeholder="Password" type={showPassword}/>
            </Form.Item>

            <Form.Item
              label='Confirm password'
              name="passwordConfirm"
              dependencies={['password']}
              rules={confirmPassRules}
            >
              <Input placeholder="Confirm password" type={showPassword} />
            </Form.Item>
          </div>

          <ul>
            <li>At least 8 characters</li>
            <li>At least one lower case character</li>
            <li>At least one capital letter</li>
            <li>At least one special character ~@#$%^& </li>
          </ul>

        <div className='checkbox-show-password-block'>
          <Checkbox onChange={checkboxHandler}>Show password</Checkbox>
        </div>

        <div>
          <Title level={4}>Terms and conditions agreement</Title>

          <Nav to='#'>User term and conditions</Nav>

          <div className='agreement-block sign-up-input-block'>
            <Form.Item name="agreement" valuePropName="checked">
              <Checkbox>I have read, understood and agree to the above terms and conditions
              </Checkbox>
            </Form.Item>
          </div>
        </div>
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

export default SignUpForm;
