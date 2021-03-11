import React from 'react';
import ReactDOM from 'react-dom';
import './myindex.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function reportWebVitals({ id, name }) {
  ('send', 'event', {
    severity: 'Web Vitals',
    issuedescription: name
    //eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    //eventLabel: id, // id unique to current page load
    //nonInteraction: true, // avoids affecting bounce rate
  });
}///function reportWebVitals({
   //issuedescription: name,
//})

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
