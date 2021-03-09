import React from 'react';
import { NavLink as Nav } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { CLIENTS, INFORMATION, SUPPORT } from '../../constants/routes';
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
        <Nav to={INFORMATION}>
          <li>Learn more</li>
        </Nav>
        <Nav to={SUPPORT}>
          <li>Support</li>
        </Nav>
        <button onClick={onLogOut}>Log out</button>
      </ul>
    </div>
  );
};

export default Navbar;
