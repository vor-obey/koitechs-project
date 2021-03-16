import React, { useState, useCallback, useEffect } from 'react';
import './style.scss';
import { Row, Typography } from 'antd';
import ProfileRow from './ProfileRow';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import ProfilePasswordRow from './ProfilePasswordRow/ProfilePasswordRow';

const { Title } = Typography;

const Profile = () => {
  const isLoading = useSelector(state => state.userReducer.isLoading);
  const user = useSelector(state => state.userReducer.user);

  const [customIconStr, setCustomIconStr] = useState({});

  const { name, email, phone } = customIconStr;

  useEffect(() => {
    if (user) {
      setCustomIconStr({
        name: user?.name,
        email: user?.email,
        phone: user?.phone
      });
    }
  }, [user]);

  const onChange = useCallback((e) => {
    setCustomIconStr({ ...customIconStr, [e.target.name]: e.target.value });
  }, [customIconStr]);

  return (
    <Loading loading={isLoading}>
      <Row className='profile-container'>
        <Title level={2} style={{ marginLeft: 10 }}>My profile</Title>
        <ProfileRow value={name} name='Name' onChange={onChange} />
        <ProfileRow value={email} name='Email' onChange={onChange} />
        <ProfileRow value={phone} name='Phone' onChange={onChange} />
        <ProfilePasswordRow />
      </Row>
    </Loading>
  );
};

export default Profile;
