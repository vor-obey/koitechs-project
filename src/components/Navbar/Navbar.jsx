import React from 'react';
import { NavLink as Nav } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { CLIENTS, SUPPORT } from '../../constants/routes';
import './style.scss';
import { logOut } from '../../data/store/user/userActions';

const Navbar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.userReducer.user);

  const onLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className='navbar'>
      <ul className='navbar-links'>
        <Nav to={CLIENTS}>
          <li>Clients</li>
        </Nav>
        <Nav to='#' style={{ color: 'white' }}>
          <li>Learn more</li>
        </Nav>
        <Nav to={SUPPORT}>
          <li>Support</li>
        </Nav>
      </ul>
      <div className='user-info-block'>
        <div className='user-info-container'>
          <p>Logged in as {currentUser?.name || ''}</p>
          <button onClick={onLogOut}>Log out</button>
        </div>
        <input type="text" placeholder='Search' />
      </div>
    </div>
  );
};

export default Navbar;
