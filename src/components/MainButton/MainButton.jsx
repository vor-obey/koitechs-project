import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const MainButton = ({ type, disabled, onClick, children }) => {
  const className = disabled ? 'main-button disabled' : 'main-button';
  return (
    <button disabled={disabled} className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default MainButton;

MainButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool
};
