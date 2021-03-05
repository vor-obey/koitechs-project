import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { FORGOT_PASSWORD, LOGIN, RESET_PASSWORD, SIGN_UP } from '../../constants/routes';
import LoginForm from '../LoginForm/LoginForm';
import ForgotPasswordForm from '../ForgotPasswordForm/ForgotPassworForm';
import AuthHeader from '../AuthHeader';
import './style.css';
import { PrivateRoute } from '../../PrivateRouter';
import AuthFooter from '../AuthFooter';
import ResetPassword from '../ResetPassword';
import ForgotPasswordConfirmation from '../ForgotPasswordForm/ForgotPasswordConfirmation';
import { useSelector } from 'react-redux';
import SignUpForm from '../SignUpForm';

const Routing = () => {
  const confirmStepForForgotPassword = useSelector(state => state.userReducer.confirmStep);

  return (
    <div className='root'>
      <BrowserRouter>
          <AuthHeader/>
            <Switch>
              <PrivateRoute exact path={LOGIN} component={LoginForm}/>
              <PrivateRoute exact path={RESET_PASSWORD} component={ResetPassword}/>
              <PrivateRoute exact path={SIGN_UP} component={SignUpForm}/>

              <Route exact path={FORGOT_PASSWORD} render={(props) => (
                confirmStepForForgotPassword
                  ? <ForgotPasswordConfirmation {...props} />
                  : <ForgotPasswordForm {...props} />
              )}
              />
              <Redirect to={LOGIN}/>
            </Switch>
          <AuthFooter />
      </BrowserRouter>
    </div>
  );
};

export default Routing;
