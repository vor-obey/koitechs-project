import React, { useCallback, useState } from 'react';

import './style.css';
import { CLIENTS } from '../../../constants/routes';
import { useHistory } from 'react-router';

const ChoseName = () => {
  const [name, setName] = useState('');
  const history = useHistory();

  const onChangeName = useCallback((e) => {
    setName(e.target.value);
  }, [name]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    alert(name);
    history.push(CLIENTS);
  }, [name]);

  return (
    <form className='chose-name-container' onSubmit={onSubmit}>
      <title>Create alias client account</title>

      <div className='enter-name'>
        <h2>Name*</h2>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' value={name} placeholder='name' onChange={onChangeName}/>
        <button type='submit'>Register</button>
      </div>
    </form>
  );
};

export default ChoseName;
