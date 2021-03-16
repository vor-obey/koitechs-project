import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import { PrivateRoute } from '../../PrivateRouter';
import { FORGOT_PASSWORD, LOGIN, SIGN_UP } from '../../constants/routes';
import LoginForm from '../LoginForm/LoginForm';
import ForgotPassword from '../ForgotPassword';
import SignUp from '../SignUp';
import { Col, Layout } from 'antd';
import './style.scss';
import AuthHeader from '../AuthHeader';
import MainFooter from '../MainFooter';

const { Content } = Layout;

const AuthRouting = () => {
  return (
      <Layout className='layout-auth'>
        <AuthHeader />
        <Content className='content'>
          <Col className='left-label'>
            <p>Log in</p>
          </Col>
          <Col className='main'>
            <Switch>
              <PrivateRoute exact path={LOGIN} component={LoginForm}/>
              <PrivateRoute exact path={SIGN_UP} component={SignUp}/>

              <PrivateRoute exact path={FORGOT_PASSWORD} component={ForgotPassword}/>
              <Redirect to={LOGIN}/>
            </Switch>
          </Col>
        </Content>
        <MainFooter />
      </Layout>
  );
};

export default AuthRouting;
