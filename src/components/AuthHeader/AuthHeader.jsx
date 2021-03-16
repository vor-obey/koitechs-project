import React from 'react';
import './style.scss';
import LogoType from './Logo Citroneer.jpg';
import { Button, Menu, Layout } from 'antd';
import { LOGIN } from '../../constants/routes';
import { useHistory } from 'react-router';

const { Header } = Layout;

const AuthHeader = () => {
  const history = useHistory();

  return (
    <Header className='header-wrap'>
      <div className='vertical-line-header'/>
      <div className='logotype' >
        <img src={LogoType} alt=""/>
      </div>
      <Menu mode="horizontal" className='header-nav'>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
        <Menu.Item key="4">nav 4</Menu.Item>
        <Button onClick={() => history.push(LOGIN)}>Log in</Button>
      </Menu>
      <div className='underline' />
    </Header>
  );
};

export default AuthHeader;
