import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { Route } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const renderComponent = useCallback((props) => {
    return (
      <Component {...props} />
    );
  }, [Component]);

  return (
    <Route
      {...rest}
      render={props => renderComponent(props)}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired
};
