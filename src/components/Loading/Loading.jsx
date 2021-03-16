import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Loading = ({ children, loading }) => {
  return (
    <div>
      {loading
        ? (
          <div className="lds-default">
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
          </div>
          )
        : children }
    </div>
  );
};

export default Loading;

Loading.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node
};
