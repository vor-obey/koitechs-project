import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { signUp } from '../../../data/store/user/userActions';
import './style.scss';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import { signUpValidation } from '../../../helpers/validation';
import { Button, Form, Row } from 'antd';

const style = { color: 'red', position: 'absolute', top: 60, fontSize: 14 };

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState('password');
  const [agreement, setAgreement] = useState(false);

  const formik = useFormik({
    initialValues: {
      role: 'advisor',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      passwordConfirm: ''
    },
    validationSchema: signUpValidation,
    onSubmit: fields => onSubmit(fields)
  });

  const onChangeCheckbox = useCallback((e) => {
    setAgreement(e.target.checked);
  }, [setAgreement]);

  const checkboxHandler = useCallback((e) => {
    const { checked } = e.target;
    if (checked) {
      setShowPassword('text');
    } else {
      setShowPassword('password');
    }
  }, []);

  const onSubmit = useCallback((fields) => {
    dispatch(signUp(fields));
  }, [dispatch]);

  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  return (
    <Row className='sign-up-row'>
        <Form form={form} name="horizontal_login" layout="vertical" onFinish={onSubmit} className='sign-up-container'>
        <div>
          <h4>Role*</h4>
          <div className='radio-input-block'>
            <div>
              <input type="radio" name="role" id="client" disabled />
              <label htmlFor="role">Client</label>
            </div>

            <div>
              <input
                type="radio"
                name="role"
                id="advisor"
                checked
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}/>
              <label htmlFor="role">Advisor</label>
            </div>
          </div>
        </div>

        <div className="sign-up-wrapper">
          <h4>Name</h4>
          <div className='sign-up-input-block'>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First name..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
            {formik.touched.firstName && formik.errors.firstName
              ? (
              <div style={style}>{formik.errors.firstName}</div>
                )
              : null}
          </div>

          <div className='sign-up-input-block'>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last name..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
            {formik.touched.lastName && formik.errors.lastName
              ? (
                <div style={style}>{formik.errors.lastName}</div>
                )
              : null}
          </div>
        </div>

        <div className="sign-up-wrapper">
          <h4>Contact Information</h4>
          <div className='sign-up-input-block'>
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
            {formik.touched.email && formik.errors.email
              ? (
                <div style={style}>{formik.errors.email}</div>
                )
              : null}
          </div>

          <div className='sign-up-input-block'>
          <label htmlFor="phone">Mobile Phone</label>
          <input
            type="phone"
            name="phone"
            id="phone"
            placeholder="Phone..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
            {formik.touched.phone && formik.errors.phone
              ? (
                <div style={style}>{formik.errors.phone}</div>
                )
              : null}
          </div>
        </div>

        <div className="sign-up-wrapper">
          <h4>Password</h4>
          <div className='sign-up-input-block'>
          <label htmlFor="password">Password</label>
          <input
            type={showPassword}
            name="password"
            id="password"
            placeholder="Password..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
            {formik.touched.password && formik.errors.password
              ? (
                <div style={style}>{formik.errors.password}</div>
                )
              : null}
          </div>

          <div className='sign-up-input-block'>
          <label htmlFor="passwordConfirm">Confirm password</label>
          <input
            type={showPassword}
            name="passwordConfirm"
            id="passwordConfirm"
            placeholder="Confirm password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.passwordConfirm}
          />
            {formik.touched.passwordConfirm && formik.errors.passwordConfirm
              ? (
                <div style={style}>{formik.errors.passwordConfirm}</div>
                )
              : null}
          </div>

          <ul>
            <li>At least 8 characters</li>
            <li>At least one lower case character</li>
            <li>At least one capital letter</li>
            <li>At least one special character ~@#$%^& </li>
          </ul>
        </div>

        <div className='checkbox-show-password-block'>
          <input
            type="checkbox"
            id="showPassword"
            name="showPassword"
            onChange={checkboxHandler}
          />
          <label htmlFor="showPassword">Show password</label>
        </div>

        <div>
          <h4>Terms and conditions agreement</h4>

          <NavLink to='#'>User term and conditions</NavLink>

          <div className='agreement-block sign-up-input-block'>
            <input type="checkbox" name="agreement" id="agreement" onChange={onChangeCheckbox} checked={agreement} value={agreement}/>
            <label htmlFor="agreement">
              I have read, understood and agree to the above terms and conditions
            </label>
          </div>
        </div>
          <Form.Item shouldUpdate>
            {() => (
              <Button
                type="default"
                htmlType="submit"
                disabled={
                  !form.isFieldsTouched(true) ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length).length
                }
              >
                Register
              </Button>
            )}
          </Form.Item>      </Form>
    </Row>
  );
};

export default SignUpForm;
