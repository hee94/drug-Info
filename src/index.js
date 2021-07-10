import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Auth from './service/firebaseauth';

const authService = new Auth();


ReactDOM.render(
  <React.StrictMode>
    <App  authService={authService} />
  </React.StrictMode>,
  document.getElementById('root')
);
