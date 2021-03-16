import React, { useEffect } from 'react';
import { Redirect, Switch } from 'react-router';
import MainFooter from '../MainFooter';
import { PrivateRoute } from '../../PrivateRouter';
import Clients from '../../pages/Clients';
import { CLIENTS, CLIENTS_PROFILE, CREATE_ACCOUNT, INFORMATION, PROFILE, SUPPORT } from '../../constants/routes';
import Support from '../../pages/Support';
import Information from '../../pages/Information';
import Navbar from '../Navbar';
import CreateAccount from '../CreateAccount';
import { useDispatch } from 'react-redux';
import { getUser } from '../../data/store/user/userActions';
import { Layout } from 'antd';
import Profile from '../../pages/Profile';
import ClientsProfile from '../../pages/ClientsProfile';

const { Content } = Layout;
const MainRouting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <Layout className='layout-main'>
        <Navbar />
        <Content className='content-row'>
          <Switch>
            <PrivateRoute exact path={CLIENTS} component={Clients} />
            <PrivateRoute exact path={PROFILE} component={Profile} />
            <PrivateRoute exact path={CREATE_ACCOUNT} component={CreateAccount} />
            <PrivateRoute exact path={CLIENTS_PROFILE} component={ClientsProfile} />
            <PrivateRoute exact path={INFORMATION} component={Information} />
            <PrivateRoute exact path={SUPPORT} component={Support} />

            <Redirect to={CLIENTS} />
          </Switch>
        </Content>
        <MainFooter />
    </Layout>
  );
};

export default MainRouting;
