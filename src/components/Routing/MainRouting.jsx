import React from 'react';
import { Redirect, Switch, useHistory } from 'react-router';
import MainFooter from '../MainFooter';
import { PrivateRoute } from '../../PrivateRouter';
import Clients from '../../pages/Clients';
import { CLIENTS, INFORMATION, SUPPORT } from '../../constants/routes';
import Support from '../../pages/Support';
import Information from '../../pages/Information';
import Navbar from '../Navbar';

const MainRouting = () => {
  const history = useHistory();
  return (
    <>
      <Navbar history={history} />
        <Switch>
          <PrivateRoute exact path={CLIENTS} component={Clients} />
          <PrivateRoute exact path={INFORMATION} component={Information} />
          <PrivateRoute exact path={SUPPORT} component={Support} />

          <Redirect to='/dashboard' />
        </Switch>
      <MainFooter />
    </>
  );
};

export default MainRouting;
