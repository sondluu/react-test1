import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// function AppTwo() {
//   return<h1>This is the second part</h1>
// }






ReactDOM.render(

  // React.createElement("h", null, "hello"),

  <React.StrictMode>
    {/* <React.Fragment> */}
    <App login="sondluu" />,
    {/* <AppTwo /> */}
    {/* </React.Fragment> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
