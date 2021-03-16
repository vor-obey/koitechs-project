import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { login } from '../../data/store/user/userActions';
import './style.scss';
import { NavLink as Nav, useHistory } from 'react-router-dom';
import { FORGOT_PASSWORD, SIGN_UP } from '../../constants/routes';
import { Form, Input, Button, Row, Typography } from 'antd';
import Loading from '../Loading';
import Logo from './Logo Quant.jpg';

const { Text, Title } = Typography;

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [remember, setRemember] = useState(false);
  // const [activeBtn, isActiveBtn] = useState('Email');
  const isLoading = useSelector(state => state.userReducer.isLoading);

  const emailRules = [
    {
      required: true,
      type: 'email',
      message:
         'Enter a valid email address!'
    }
  ];

  const passwordRules = [
    {
      required: true,
      message: 'Please input your password!'
    },
    {
      min: 8,
      message: 'Your password must be at least 8 characters.'
    }
  ];
  //
  // const setButtonValue = () => {
  //   if (activeBtn === 'Email') {
  //     isActiveBtn('BankID');
  //   } else {
  //     isActiveBtn('Email');
  //   }
  // };
  // const buttonStyle = activeBtn === 'Email' ? 'switcher active' : 'switcher';

  const handleCheckbox = useCallback((e) => {
    setRemember(e.target.checked);
  }, [setRemember]);

  const onSubmit = useCallback((fields) => {
    const data = { ...fields, remember };
    dispatch(login({ data, history }));
  }, [history, dispatch]);

  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  return (
    <Loading loading={isLoading}>
        <Row className='log-in-form'>
          <Form form={form} name="horizontal_login" layout="vertical" onFinish={onSubmit} className='sign-in-container'>
            <div className='sign-in-content'>
              <img src={Logo} alt=""/>
              <Row>
                <Text className='login-title'>Welcome to Quant</Text>
              </Row>
              <Row>
                <Text className='login-subtitle'>Logga in</Text>
              </Row>
              <Form.Item
                label='Email'
                name="email"
                rules={emailRules}
              >
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item
                label='Password'
                name="password"
                rules={passwordRules}
              >
                <Input
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Row className='forgot-password'>
                  <Row className='checkbox-forgot'>
                    <input type='checkbox' name='remember' id='remember' onChange={handleCheckbox} />
                    <label htmlFor='remember'>Remember me</label>
                  </Row>
                  <Nav className="login-form-forgot" to={FORGOT_PASSWORD}>
                    Forgot password
                  </Nav>
                </Row>
              </Form.Item>
              <Form.Item shouldUpdate>
                {() => (
                  <Button
                    type="default"
                    htmlType="submit"
                    disabled={
                      !form.isFieldsTouched(true) ||
                      !!form.getFieldsError().filter(({ errors }) => errors.length).length
                    }
                  >
                    Log in
                  </Button>
                )}
              </Form.Item>
            </div>
            <Row className='create-account-text'>
              Never give out your login credentials and never
              log in at the request of someone who contacts you
              <Nav to={SIGN_UP}>Register now!</Nav>
            </Row>
          </Form>
        </Row>
        <Row className='log-in-text'>
          <Title>Quia voluptas sit?</Title>
          Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et
          quasi architecto beatae vitae dicta sunt explicabo. Nemo
          enim ipsam voluptatem quia voluptas sit aspernatur aut odit
          aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
          ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
          non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
          ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui
          in ea voluptate velit esse quam nihil molestiae consequatur, vel
          illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </Row>
    </Loading>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  history: PropTypes.object
};
