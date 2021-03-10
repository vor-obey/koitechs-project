import React, { useEffect } from 'react';
import { Redirect, Switch } from 'react-router';
import MainFooter from '../MainFooter';
import { PrivateRoute } from '../../PrivateRouter';
import Clients from '../../pages/Clients';
import { CLIENTS, CREATE_ACCOUNT, INFORMATION, SUPPORT } from '../../constants/routes';
import Support from '../../pages/Support';
import Information from '../../pages/Information';
import Navbar from '../Navbar';
import CreateAccount from '../CreateAccount';
import { useDispatch } from 'react-redux';
import { getUser } from '../../data/store/user/userActions';

const MainRouting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className='main-container'>
        <Switch>
          <PrivateRoute exact path={CLIENTS} component={Clients} />
          <PrivateRoute exact path={INFORMATION} component={Information} />
          <PrivateRoute exact path={SUPPORT} component={Support} />
          <PrivateRoute exact path={CREATE_ACCOUNT} component={CreateAccount} />

          <Redirect to={CLIENTS} />
        </Switch>
      </div>
      <MainFooter />
    </>
  );
};

export default MainRouting;
