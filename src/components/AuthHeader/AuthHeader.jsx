import React from 'react';
import './style.scss';
import LogoType from './Logo Citroneer.jpg';
import { Button, Menu, Layout } from 'antd';
import { LOGIN } from '../../constants/routes';
import { useHistory } from 'react-router';
import { NavLink as Nav } from 'react-router-dom';

const { Header } = Layout;

const AuthHeader = () => {
  const history = useHistory();

  return (
    <Header className='header-wrap'>
      <div className='vertical-line-header'/>
      <Nav to={LOGIN} className='logotype' >
        <img src={LogoType} alt=""/>
      </Nav>
      <Menu mode="horizontal" className='header-nav'>
        <Menu.Item key="1" disabled>Nyhetsrum </Menu.Item>
        <Menu.Item key="2" disabled>Om oss </Menu.Item>
        <Menu.Item key="3" disabled>Våra tjänster</Menu.Item>
        <Menu.Item key="4" disabled>Karriär</Menu.Item>
        <Button onClick={() => history.push(LOGIN)}>Logga in</Button>
      </Menu>
      <div className='underline' />
    </Header>
  );
};

export default AuthHeader;
