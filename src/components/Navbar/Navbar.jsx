import React from 'react';
import { NavLink as Nav } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { CLIENTS, SUPPORT } from '../../constants/routes';
import './style.css';
import { logOut } from '../../data/store/user/userActions';

const Navbar = () => {
  const dispatch = useDispatch();

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
      <div>
        <div className='user-info-container'>
          <p>Logged in as *****</p>
          <button onClick={onLogOut}>Log out</button>
        </div>
        <input type="text" placeholder='Search' />
      </div>
    </div>
  );
};

export default Navbar;
