import React, { useCallback } from 'react';

import './style.scss';
import { CLIENTS } from '../../../constants/routes';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { createClient } from '../../../data/store/clients/clientActions';
import MainButton from '../../MainButton';
import { Form, Input } from 'antd';

const ChooseName = ({ clientData }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onSubmit = useCallback((fields) => {
    const data = { ...clientData, name: fields.name };
    dispatch(createClient(data));
    history.push(CLIENTS);
  }, [dispatch, history, clientData]);

  return (
    <Form form={form} name="horizontal_login" layout="vertical" onFinish={onSubmit} className='chose-name-container'>
        <h1>Create alias client account</h1>
        <div className='enter-name'>
          <Form.Item
            label='Name'
            name="name"
          >
            <Input placeholder="Name" />
          </Form.Item>
          <MainButton type='submit'>Register</MainButton>
        </div>
      </Form>
  );
};

export default ChooseName;

ChooseName.propTypes = {
  clientData: PropTypes.object
};
