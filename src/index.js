import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter basename={'/save-team/'}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
