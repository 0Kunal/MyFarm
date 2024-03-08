import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import store from './store/index';
import RootContainer from './pages/rootContainer';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
}

export default App;
