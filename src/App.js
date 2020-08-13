import React from 'react';
import {StatusBar} from 'react-native';

import Home from './pages/Home';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Home />
    </>
  );
};

export default App;
