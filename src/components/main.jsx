import React, { useEffect, useState} from 'react';
import Save from './save/save';
import Header from './header';
import Editor from './editor/editor'
import { useHistory } from 'react-router-dom';
import styles from './main.module.css'

const Main = ({authService, onsearch, druginfo, drugList, updateInfo}) => {
  const history = useHistory();
  const [card, setCard] =useState([]);
  const logout = () =>{
    authService.onlogOut()
   }
   useEffect(() => { 
    authService.onAuthChange(user => {
        if (!user) {
          history.push('/')
        }
    })
});
const handleSearch =(query)=>{
  onsearch(query)
}
const onsave = (eat, time, text)=>{
  druginfo && setCard([...card, {eatchk:eat, timechk:time, id:Date(), name:druginfo[0].itemName, use:druginfo[0].efcyQesitm,  memo : text}]);
}
const ondelete =(id)=>{
const del = [...card];
setCard(del.filter(el => el.id !== id))

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