import React, { useCallback, useEffect, useState} from 'react';
import Save from './save/save';
import Header from './header';
import Editor from './editor/editor'
import { useHistory } from 'react-router-dom';
import styles from './main.module.css'

const Main = ({authService,repository,searchService }) => {
  const history = useHistory();
  const historyState = history?.location?.state;
  const [card, setCard] =useState([]);
  const [userId, setUserId] =useState(historyState && historyState.id);
  const [list, setList] = useState(null);
  const [info, setInfo] = useState(null);

  useEffect(() => { 
    authService.onAuthChange(user => {
        if (user) {
          setUserId(user.uid);
        }else{
          history.push('/')
        }
    })
  },[userId, authService, history]);
  useEffect(()=>{
    if(!userId){
        return;
    }
    const stopSycn = repository.syncCards(userId, info=>{
      let result= Object.keys(info).map(function (key) { 
        return info[key]; 
    }); 
    setCard(result);
        
    })
    return () => {stopSycn();}
  },[userId,repository]);

  const handleSearch = (query) => {
    searchService.search(query)
      .then(data => data.body.items)
      .then(item => {
        if (item.length === 1) { 
          setInfo(item) 
          setList('')
        }
        else { 
          setList(item) 
          setInfo('')
        }
      })
      .catch(err => alert('약이름을 정확히 입력해주세요'))
  }
  const updateInfo =(clickitem)=>{
    setInfo([clickitem]);
    setList('');
  }
  const logout = useCallback(() =>{
    authService.onlogOut()
   },[authService]);
const onsave = (infoCard)=>{
  info && setCard([...card, infoCard]);
   repository.saveInfoCard(userId, infoCard)
}
const ondelete =(id)=>{
const del = [...card];
setCard(del.filter(el => el.id !== id));
repository.removeInfoCard(userId, id)
}
    return(
        <main> 
          <Header onlogOut={logout} />
          <section className={styles.section}>
            <article className={styles.editor}>
            <Editor handleSearch={handleSearch} 
            drugList={list} druginfo={info}
            updateInfo={updateInfo} onsave={onsave} />
            </article>
            <article className={styles.save}>
            <Save update={card} ondelete={ondelete}/>
            </article>
            
          </section>
        </main>
    )
}

export default Main;