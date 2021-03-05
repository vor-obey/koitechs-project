import AuthHeader from '../AuthHeader';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from '../../PrivateRouter';
import { FORGOT_PASSWORD, LOGIN, RESET_PASSWORD, SIGN_UP } from '../../constants/routes';
import LoginForm from '../LoginForm/LoginForm';
import ResetPassword from '../ResetPassword';
import SignUpForm from '../SignUpForm';
import AuthFooter from '../AuthFooter';
import React from 'react';
import ForgotPassword from '../ForgotPassword';

const AuthRouting = () => {
  return (
    <>
      <AuthHeader/>
        <Switch>
          <PrivateRoute exact path={LOGIN} component={LoginForm}/>
          <PrivateRoute exact path={RESET_PASSWORD} component={ResetPassword}/>
          <PrivateRoute exact path={SIGN_UP} component={SignUpForm}/>

          <Route exact path={FORGOT_PASSWORD} component={ForgotPassword}/>
          <Redirect to={LOGIN}/>
        </Switch>
      <AuthFooter />
  </>
  );
};

export default AuthRouting;
