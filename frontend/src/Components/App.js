import React from 'react';
import Form from './Form';
import configureAppStore from '../store/configureStore';
import { Provider } from 'react-redux';

function App() {
  const store = configureAppStore();
  return (
    <div className="App">
      <Provider store={store}>
        <div className='container'>
          <Form />
        </div>
      </Provider>
    </div>
  );
}

export default App;
