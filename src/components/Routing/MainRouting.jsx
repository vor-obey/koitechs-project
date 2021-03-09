import React from 'react';
import { Redirect, Switch } from 'react-router';
import MainFooter from '../MainFooter';
import { PrivateRoute } from '../../PrivateRouter';
import Clients from '../../pages/Clients';
import { CLIENTS, INFORMATION, SUPPORT } from '../../constants/routes';
import Support from '../../pages/Support';
import Information from '../../pages/Information';
import Navbar from '../Navbar';

const MainRouting = () => {
  return (
    <>
      <Navbar />
        <Switch>
          <PrivateRoute exact path={CLIENTS} component={Clients} />
          <PrivateRoute exact path={INFORMATION} component={Information} />
          <PrivateRoute exact path={SUPPORT} component={Support} />

          <Redirect to={CLIENTS} />
        </Switch>
      <MainFooter />
    </>
  );
};

export default MainRouting;
