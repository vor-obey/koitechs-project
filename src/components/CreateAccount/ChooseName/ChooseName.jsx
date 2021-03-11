import React, { useCallback } from 'react';

import './style.scss';
import { CLIENTS } from '../../../constants/routes';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { createClient } from '../../../data/store/clients/clientActions';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { nameValidation } from '../../../helpers/validation';
import MainButton from '../../MainButton';

const style = { color: 'red', position: 'absolute', top: 70, fontSize: 14 };

const ChooseName = ({ setClientData, clientData }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = useCallback((fields) => {
    const data = { ...clientData, name: fields.name };
    setClientData(data);
    dispatch(createClient(clientData));
    history.push(CLIENTS);
  }, [dispatch, history, clientData, setClientData]);

  return (
    <Formik initialValues={{ name: '' }} onSubmit={(fields) => onSubmit(fields)} validationSchema={nameValidation}>
      <Form className='chose-name-container' >
        <h1>Create alias client account</h1>
        <div className='enter-name'>
          <label htmlFor="name">Name</label>
          <Field type="text" name='name' placeholder='name' />
          <ErrorMessage
            component='div'
            style={style}
            name='name'
          />
          <MainButton disabled type='submit'>Register</MainButton>
        </div>
      </Form>
    </Formik>
  );
};

export default ChooseName;

ChooseName.propTypes = {
  setClientData: PropTypes.func,
  clientData: PropTypes.object
};
