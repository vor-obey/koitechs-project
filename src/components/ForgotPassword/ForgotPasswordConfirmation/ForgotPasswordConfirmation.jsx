import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { useDispatch } from 'react-redux';
import { clearConfirmStep } from '../../../data/store/user/userActions';
import { LOGIN } from '../../../constants/routes';
import BackToSignUp from '../../BackToSignUp';
import MainButton from '../../MainButton';
import { SIMULATE_CLICK_ON_LINK } from '../../../data/store/user/userActionTypes';
import { NavLink as Nav } from 'react-router-dom';
import { Typography, Row } from 'antd';

const { Text } = Typography;

const ForgotPasswordConfirmation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(clearConfirmStep());
  });

  const onSimulate = useCallback(() => {
    dispatch({ type: SIMULATE_CLICK_ON_LINK });
  }, [dispatch]);

  return (
    <Row className='forgot-password-wrapper'>
      <div className='forgot-password-confirm'>
        <p>
          We have sent instructions or resetting you password XXXXXXXXXXXX@XXXXX.XXX
        </p>
        <h3>
          No email from us?
        </h3>
        <ol>
          <li>Check your spam folder</li>
          <li>Check your spelling</li>
          <li>Wait 15 minutes and try again</li>
        </ol>
        <Nav to={LOGIN}><Text strong>Back to the login</Text></Nav>
        <BackToSignUp />
        <MainButton onClick={onSimulate}>Simulate send message</MainButton>
      </div>
    </Row>
  );
};

export default ForgotPasswordConfirmation;

ForgotPasswordConfirmation.propTypes = {
  history: PropTypes.object
};
