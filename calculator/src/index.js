import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


=======
import './index.css';
import Main from "./calculator/Main";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
>>>>>>> c98061b72f5b9c81ad076e7bf05db0d70b19d56a
