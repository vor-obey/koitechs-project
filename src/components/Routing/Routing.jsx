import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { FORGOT_PASSWORD, LOGIN } from '../../constants/routes';
import LoginForm from '../LoginForm/LoginForm';
import ForgotPasswordForm from '../ForgotPasswordForm/ForgotPassworForm';
import Header from '../Header';
import './style.css';
import { PrivateRoute } from '../../PrivateRouter';
import Footer from '../Footer';

const Routing = () => {
  return (
    <div className='root'>
      <BrowserRouter>
        <Header />
          <Switch>
            <PrivateRoute exact path={LOGIN} component={LoginForm} />
            <PrivateRoute exact path={FORGOT_PASSWORD} component={ForgotPasswordForm} />
          </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Routing;
