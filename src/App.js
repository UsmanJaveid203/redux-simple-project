import React from 'react';
import {Provider} from 'react-redux';
import BookContainer from './components/bookContainer';
import HookBookContainer from './components/HookBookContainer';
import store from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <HookBookContainer/>
      <BookContainer/>
    </div>
    </Provider>
  );
}

export default App;
