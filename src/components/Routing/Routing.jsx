import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AuthRouting from './AuthRoutin';
import './style.css';
import MainRouting from './MainRouting';

const Routing = () => {
  const authorized = localStorage.getItem('accessToken');

  return (
    <div className='root'>
      <BrowserRouter >
        {authorized ? <MainRouting /> : <AuthRouting />}
      </BrowserRouter>
    </div>
  );
};

export default Routing;
