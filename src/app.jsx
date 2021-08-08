import React  from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login/login';
import Join from './components/join/join';
import Main from './components/main';
import stlyes from './app.module.css';


function App({ authService, searchService, repository }) {
  
  return (
    <div className={stlyes.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/main">
            <Main authService={authService} 
            searchService ={searchService} repository={repository}/>
          </Route>
          <Route path="/join">
            <Join authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
