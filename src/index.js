import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Auth from './service/firebaseauth';
import SearchDrug from './service/searchdrug';

const authService = new Auth();
const searchService = new SearchDrug(process.env.REACT_APP_DRUG_APIKEY);


ReactDOM.render(
  <React.StrictMode>
    <App  authService={authService} searchService={searchService} />
  </React.StrictMode>,
  document.getElementById('root')
);
