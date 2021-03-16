import React, { useCallback, useState } from 'react';
import { Button, Input, Row, Typography } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import './style.scss';
import { useDispatch } from 'react-redux';
import { userProfileUpdate } from '../../../data/store/user/userActions';

const { Text } = Typography;

const ProfileRow = ({ value, onChange, name }) => {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const toLowerName = name.toLowerCase();

  const editValue = useCallback(() => {
    setEdit(!edit);
  }, [edit]);

  const onSave = () => {
    dispatch(userProfileUpdate({ [name]: value }));
    setEdit(!edit);
  };

  return (
    <Row className='profile-row'>
      <Row className='input-block'>
        <Text strong className='row-title'>{name}</Text>
        {edit
          ? <Input placeholder="Basic usage" value={value} onChange={onChange} name={toLowerName} maxLength={50} />
          : <Text className='profile-row-value' onClick={editValue}>{value}</Text>
        }
      </Row>

      {edit ? <Button onClick={onSave} size='small' type='default'>Save</Button> : <EditOutlined style={{ fontSize: 20, color: 'lightgrey' }} onClick={editValue}/>}
    </Row>
  );
};

export default ProfileRow;

ProfileRow.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
};
