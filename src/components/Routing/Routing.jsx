import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { FORGOT_PASSWORD, LOGIN, RESET_PASSWORD } from '../../constants/routes';
import LoginForm from '../LoginForm/LoginForm';
import ForgotPasswordForm from '../ForgotPasswordForm/ForgotPassworForm';
import Header from '../Header';
import './style.css';
import { PrivateRoute } from '../../PrivateRouter';
import Footer from '../Footer';
import ResetPassword from '../ResetPassword';
import ForgotPasswordConfirmation from '../ForgotPasswordForm/ForgotPasswordConfirmation';
import { useSelector } from 'react-redux';

const Routing = () => {
  const confirmStepForForgotPassword = useSelector(state => state.userReducer.confirmStep);

  return (
    <div className='root'>
      <BrowserRouter>
        <Header />
          <Switch>
            <PrivateRoute exact path={LOGIN} component={LoginForm} />
            <PrivateRoute exact path={RESET_PASSWORD} component={ResetPassword}/>

            <Route exact path={FORGOT_PASSWORD} render={(props) => (
              confirmStepForForgotPassword
                ? <ForgotPasswordConfirmation {...props} />
                : <ForgotPasswordForm {...props} />
            )}
            />
            <Redirect to='/'/>
          </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Routing;
