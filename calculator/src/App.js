<<<<<<< HEAD
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
=======
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
>>>>>>> c98061b72f5b9c81ad076e7bf05db0d70b19d56a
}

export default App;
