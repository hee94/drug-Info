import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login/login';
import Main from './components/main';


function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
      <Login />
      </Route>
      <Route path="/main">
        <Main />
      </Route>
    </Switch>
   </BrowserRouter>
    </>
    

  );
}

export default App;
