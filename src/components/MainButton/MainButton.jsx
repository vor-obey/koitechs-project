import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const MainButton = ({ type, onClick, children }) => {
  return (
    <button className='main-button' type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default MainButton;

MainButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
};
