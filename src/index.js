import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Auth from './service/firebaseauth';
import SearchDrug from './service/searchdrug';
import Repository from './service/repository';

const authService = new Auth();
const searchService = new SearchDrug(process.env.REACT_APP_DRUG_APIKEY);
const repository = new Repository();

ReactDOM.render(
  <React.StrictMode>
    <App  authService={authService} 
    searchService={searchService} repository={repository} />
  </React.StrictMode>,
  document.getElementById('root')
);
