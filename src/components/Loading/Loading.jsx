import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Loading = ({ children, loading }) => {
  return (
    <div>
      {loading ? <div className="loader">Loading...</div> : children }
    </div>
  );
};

export default Loading;

Loading.propTypes = {
  loading: PropTypes.string,
  children: PropTypes.node
};
