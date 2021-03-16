import React, { useCallback } from 'react';
import { NavLink as Nav } from 'react-router-dom';

import { CLIENTS, INFORMATION, PROFILE, SUPPORT } from '../../constants/routes';
import './style.scss';
import LogoType from './Logo Quant.jpg';
import { Menu, Layout, Button } from 'antd';
import { logOut } from '../../data/store/user/userActions';
import { useDispatch } from 'react-redux';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';

const { Header } = Layout;

const Navbar = () => {
  const dispatch = useDispatch();

  const onLogOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (
    <Header className='header-wrap' style={{ position: 'sticky' }}>
      <div className='logotype' >
        <img src={LogoType} alt=""/>
      </div>
      <Menu mode="horizontal" defaultSelectedKeys={['1']} className='header-nav'>
        <Menu.Item key="1"><Nav to={CLIENTS}>Clients</Nav></Menu.Item>
        <Menu.Item key="2"><Nav to={INFORMATION}>Information</Nav></Menu.Item>
        <Menu.Item key="3"><Nav to='#'>FAQ</Nav></Menu.Item>
        <Menu.Item key="4"><Nav to={SUPPORT}>Support</Nav></Menu.Item>
        <Menu.Item key="5"><Nav to='#'>Search <SearchOutlined style={{ marginLeft: 20 }} /></Nav></Menu.Item>
        <Menu.Item key="6"><Nav to={PROFILE}><UserOutlined /></Nav></Menu.Item>
        <Button onClick={onLogOut}>Log out</Button>
      </Menu>
      <div className='underline' />
    </Header>
  );
};

export default Navbar;
