import React from 'react';
import AuthHeader from '../AuthHeader';
import { Redirect, Route, Switch } from 'react-router-dom';

import { PrivateRoute } from '../../PrivateRouter';
import { FORGOT_PASSWORD, LOGIN, RESET_PASSWORD, SIGN_UP } from '../../constants/routes';
import LoginForm from '../LoginForm/LoginForm';
import ResetPassword from '../ResetPassword';
import AuthFooter from '../AuthFooter';
import ForgotPassword from '../ForgotPassword';
import SignUp from '../SignUp';

const AuthRouting = () => {
  return (
    <div>
      <AuthHeader/>
      <div className='root'>
         <Switch>
          <PrivateRoute exact path={LOGIN} component={LoginForm}/>
          <PrivateRoute exact path={RESET_PASSWORD} component={ResetPassword}/>
          <PrivateRoute exact path={SIGN_UP} component={SignUp}/>

          <Route exact path={FORGOT_PASSWORD} component={ForgotPassword}/>
          <Redirect to={LOGIN}/>
        </Switch>
      </div>
      <AuthFooter />
    </div>
  );
};

export default AuthRouting;
