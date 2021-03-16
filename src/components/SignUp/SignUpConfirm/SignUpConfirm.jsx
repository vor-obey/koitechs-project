import React, { useCallback } from 'react';
import { NavLink as Nav } from 'react-router-dom';

import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { confirmAuth } from '../../../data/store/user/userActions';
import Loading from '../../Loading';
import MainButton from '../../MainButton';
import { GO_TO_CHANGE_EMAIL } from '../../../data/store/user/userActionTypes';
import { Row } from 'antd';

const SignUpConfirm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.userReducer.isLoading);

  const onSend = useCallback((e) => {
    e.preventDefault();
    alert('Email resent');
  }, []);

  const confirmRegistration = () => {
    dispatch(confirmAuth());
  };

  const onChangeEmail = useCallback(() => {
    dispatch({ type: GO_TO_CHANGE_EMAIL });
  }, [dispatch]);

  return (
    <Loading loading={isLoading}>
      <div className='confirm-reg-wrapper'>
      <div className='confirm-reg-container'>
        <Row style={{ display: 'flex', justifyContent: 'center' }}>
          <Loading loading />
        </Row>
        <p>
          You have received a confirmation email to the email address you provided, please confirm your email to proceed
        </p>
        <div className='confirm-reg-links'>
          <Nav to='#' onClick={onChangeEmail}>Change email address</Nav>
          <Nav to='/' onClick={onSend}>Send confirmation email again</Nav>
        </div>
        <MainButton onClick={confirmRegistration}>Simulation confirm registration</MainButton>
      </div>
      </div>
    </Loading>
  );
};

export default SignUpConfirm;
