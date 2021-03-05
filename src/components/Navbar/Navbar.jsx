import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { CLIENTS, INFORMATION, SUPPORT } from '../../constants/routes';
import './style.css';

const Navbar = ({ history }) => {
  const onClickHandler = useCallback((path) => () => {
    history.push(path);
  }, [history]);

  return (
    <div className='navbar'>
    <ul className='navbar-links'>
      <li onClick={onClickHandler(CLIENTS)}>Clients</li>
      <li onClick={onClickHandler(INFORMATION)}>Learn more</li>
      <li onClick={onClickHandler(SUPPORT)}>Support</li></ul>
    </div>
  );
};

export default Navbar;

Navbar.propTypes = {
  history: PropTypes.object
};
