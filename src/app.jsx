import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login/login';
import Join from './components/join/join';
import Main from './components/main';


function App({authService}) {
  
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
      <Login authService={authService} />
      </Route>
      <Route path="/main">
        <Main authService={authService}  />
      </Route>
      <Route path="/join">
        <Join  authService={authService}/>
      </Route>
    </Switch>
   </BrowserRouter>
    </>
    

  );
}

export default App;
