import React from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Result from './components/Result';

const App = () => {
  return (
    <div className="container">
      <div className='calculator'>
      <Result />
      <Buttons />
      </div>
    </div>
  );
}

export default App;
