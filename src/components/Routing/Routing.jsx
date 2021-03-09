import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './style.css';
import AuthRouting from './AuthRoutin';
import MainRouting from './MainRouting';
import { useSelector } from 'react-redux';
import StorageService from '../../services/StorageService';

const Routing = () => {
  const [isAuthenticated, setAuthenticated] = useState(StorageService.getJWTToken('acc'));
  const user = useSelector(state => state.userReducer.user);

  useEffect(() => {
    const token = StorageService.getJWTToken('acc');

    if (token) {
      setAuthenticated(token);
    } else {
      setAuthenticated('');
    }
  }, [user]);

  return (
    <div className='root'>
      <BrowserRouter >
        {isAuthenticated ? <MainRouting /> : <AuthRouting />}
      </BrowserRouter>
    </div>
  );
};

export default Routing;
