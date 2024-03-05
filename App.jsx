import React from 'react';
import {Provider} from 'react-redux';
import store from './store/index';
import RootContainer from './pages/rootContainer';

function App() {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
}

export default App;
