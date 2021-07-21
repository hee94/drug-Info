import React, { useEffect, useState} from 'react';
import Save from './save/save';
import Header from './header';
import Editor from './editor/editor'
import { useHistory } from 'react-router-dom';
import styles from './main.module.css'

const Main = ({authService,repository, onsearch, druginfo, drugList, updateInfo}) => {
  const history = useHistory();
  const historyState = history?.location?.state;
  const [card, setCard] =useState([]);
  const [userId, setUserId] =useState(historyState && historyState.id);
  const logout = () =>{
    authService.onlogOut()
   }
   useEffect(() => { 
    authService.onAuthChange(user => {
        if (user) {
          setUserId(user.uid);
        }else{
          history.push('/')
        }
    })
});
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
},[userId]);

const handleSearch =(query)=>{
  onsearch(query)
}
const onsave = (infoCard)=>{
  druginfo && setCard([...card, infoCard]);
  console.log(infoCard)
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
            drugList={drugList} druginfo={druginfo}
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