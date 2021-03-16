import React, { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router';

import './style.scss';
import { CREATE_ACCOUNT } from '../../constants/routes';
import { useSelector } from 'react-redux';
// import { getUsers } from '../../data/store/clients/clientActions';
import MainButton from '../../components/MainButton';
import { Select } from 'antd';

const { Option } = Select;

const Clients = () => {
  const history = useHistory();
  // const dispatch = useDispatch();
  const clients = useSelector(state => state.clientReducer.users);

  const onCreateAccount = useCallback(() => {
    history.push(CREATE_ACCOUNT);
  }, []);

  // useEffect(() => {
  //   dispatch(getUsers());
  // }, [dispatch]);

  function onChange (value, data) {
    history.push(`/clients/profile/${data.id}`);
  }

  function onBlur () {
    console.log('blur');
  }

  function onFocus () {
    console.log('focus');
  }

  function onSearch (val) {
    console.log('search:', val);
  }

  const renderOptions = useMemo(() => clients.map(user => <Option key={user.id} value={user.name} id={user.id}>{user.name}</Option>), [clients]);

  console.log(renderOptions);

  return (
    <div className='clients-container'>
      <Select
        size='large'
        showSearch
        placeholder="Select a person"
        optionFilterProp="children"
        className='select-clients'
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {renderOptions}
      </Select>

      <MainButton onClick={onCreateAccount}>Create a new client</MainButton>
    </div>
  );
};

export default Clients;
