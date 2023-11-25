import React from 'react';
import {Provider} from 'react-redux';

import RootNavigator from '@shared/navigation';
import store from '@shared/store';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
