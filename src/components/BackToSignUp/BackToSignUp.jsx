import React from 'react';
import { SIGN_UP } from '../../constants/routes';
import { Typography } from 'antd';

import './style.css';
import { NavLink as Nav } from 'react-router-dom';

const { Text } = Typography;

const BackToSignUp = () => {
  return (
    <div className='back-to-container'>
      <Text>A you a new customer?</Text>
      <Nav to={SIGN_UP}><Text strong> Register now</Text></Nav>
    </div>
  );
};

export default BackToSignUp;
