import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import { resetUserPassword } from '../../data/store/user/userActions';
import MainButton from '../MainButton';
import Loading from '../Loading';
import { confirmPassRules, passwordRules } from '../../helpers/validation';
import { useHistory } from 'react-router';
import { Form, Input, Row } from 'antd';

const ResetPassword = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.userReducer.isLoading);
  const [showPassword, setShowPassword] = useState('password');
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onSubmit = useCallback((fields) => {
    dispatch(resetUserPassword({ fields, history }));
  }, [dispatch]);

  const checkboxHandler = useCallback((e) => {
    const { checked } = e.target;
    if (checked) {
      setShowPassword('text');
    } else {
      setShowPassword('password');
    }
  }, [showPassword]);

  return (
    <Loading loading={isLoading}>
      <Row className='forgot-password-wrapper'>
      <Form form={form} name="horizontal_login" layout="vertical" onFinish={onSubmit} className='reset-container'>
      <h2>Your new password</h2>
      <div className='reset-input-container'>
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

      <div className='checkbox-show-password-container'>
        <input name='showPassword' id='showPassword' type='checkbox' onChange={checkboxHandler}/>
        <label htmlFor='showPassword'>Show Password</label>
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
              Change password
            </MainButton>
          )}
        </Form.Item>
      </Form>
      </Row>
    </Loading>
  );
};

export default ResetPassword;

ResetPassword.propTypes = {
  history: PropTypes.object
};
