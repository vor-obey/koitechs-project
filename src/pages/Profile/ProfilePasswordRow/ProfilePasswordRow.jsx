import React, { useCallback, useState } from 'react';
import { Button, Input, Row, Typography } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import ProfileRow from '../ProfileRow';
import { userProfileUpdate } from '../../../data/store/user/userActions';
import { useDispatch } from 'react-redux';

const { Text } = Typography;

const ProfilePasswordRow = () => {
  const [edit, setEdit] = useState(false);
  const [passwordValue, setPasswordValue] = useState({ password: '', passwordConfirm: '' });
  const dispatch = useDispatch();

  const { password, passwordConfirm } = passwordValue;

  const onChange = useCallback((e) => {
    setPasswordValue({ ...passwordValue, [e.target.name]: e.target.value });
  }, [passwordValue]);

  const onSave = () => {
    if (password === passwordConfirm) {
      dispatch(userProfileUpdate(password));
      setEdit(!edit);
    } else {
      alert(`${password} !== ${passwordConfirm}`);
    }
  };

  const editValue = useCallback(() => {
    setEdit(!edit);
  }, [edit]);

  return (
    <Row className='profile-row'>
      <Row className='input-block'>
        <Text strong className='row-title'> Password</Text>
        {edit
          ? <Row className='password-inputs'>
              <Input placeholder="Password" value={password} onChange={onChange} name='password' maxLength={50} />
              <Input placeholder="Confirm password" value={passwordConfirm} onChange={onChange} name='passwordConfirm' maxLength={50} />
            </Row>
          : <Text className='profile-row-value' onClick={editValue}>{password}</Text>
        }
      </Row>

      {edit ? <Button onClick={onSave} size='small' type='default'>Save</Button> : <EditOutlined style={{ fontSize: 20, color: 'lightgrey' }} onClick={editValue}/>}
    </Row>
  );
};

export default ProfilePasswordRow;

ProfileRow.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
};
