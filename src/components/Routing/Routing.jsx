import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './style.scss';
import AuthRouting from './AuthRoutin';
import MainRouting from './MainRouting';
import StorageService from '../../services/StorageService';
import { useSelector } from 'react-redux';

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
      <BrowserRouter >
          {isAuthenticated ? <MainRouting /> : <AuthRouting />}
      </BrowserRouter>
  );
};

export default Routing;
