import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import store from './data/store/configureStore';
import Routing from './components/Routing/Routing';

function App () {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}

export default App;
