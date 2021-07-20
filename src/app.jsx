import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login/login';
import Join from './components/join/join';
import Main from './components/main';
import stlyes from './app.module.css';


function App({ authService, searchService }) {
  const [list, setList] = useState(null);
  const [info, setInfo] = useState(null);

  const onsearch = (query) => {
    searchService.search(query)
      .then(data => data.body.items)
      .then(item => {
        if (item.length === 1) { 
          setInfo(item) 
          setList('')
        }
        else { 
          console.log(item)
          setList(item) 
          setInfo('')
        }
      })
      .catch(err => alert('약이름을 정확히 입력해주세요'))
  }
  const updateInfo =(clickitem)=>{
    console.log(clickitem)
    setInfo([clickitem]);
    setList('');
  }
  return (
    <div className={stlyes.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/main">
            <Main authService={authService} onsearch={onsearch}
              druginfo={info} drugList={list} updateInfo={updateInfo} />
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
