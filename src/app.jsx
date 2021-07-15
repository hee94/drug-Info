import React,{useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login/login';
import Join from './components/join/join';
import Main from './components/main';
import stlyes from './app.module.css';


function App({authService, searchService}) {
  const [list, setList] = useState(null);
  const [info, setInfo] = useState(null);

  const onsearch = (query) =>{
    searchService.search(query)
    .then(data => data.body.items)
    .then(item =>{ console.log(item)
      if(item.length === 1){setInfo(item)}
       else{setList(item)}
    })
    .catch(err => alert('약이름을 정확히 입력해주세요'))
  }
  
  // console.log(info, list)   console.log(item[1].itemName)

  return (
    <div className={stlyes.app}>
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
      <Login authService={authService} />
      </Route>
      <Route path="/main">
        <Main authService={authService} onsearch={onsearch}
         druginfo={info} drugList={list} />
      </Route>
      <Route path="/join">
        <Join  authService={authService}/>
      </Route>
    </Switch>
   </BrowserRouter>
    </div>
    

  );
}

export default App;
