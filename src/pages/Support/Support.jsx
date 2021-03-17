import React from 'react';
import './style.scss';

import { Typography } from 'antd';

const { Title } = Typography;

const Support = () => {
  return (
    <div className='support-container'>
      <Title level={2}>Need support?</Title>
      <Title level={4}>Please contact Citroneer Admin</Title>
      <ul>
        <div className='fields-names'>
          <li>First name</li>
          <li>Last name</li>
          <li>Email</li>
          <li>Phone</li>
        </div>
        <div>
          <li>Leanne </li>
          <li>Graham</li>
          <li>Sincere@april.biz</li>
          <li>1-770-736-8031</li>
        </div>
      </ul>
    </div>
  );
};

export default Support;
