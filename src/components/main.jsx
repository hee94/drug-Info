import React, { useEffect} from 'react';
import Save from './save/save';
import Header from './header';
import Editor from './editor/editor'
import { useHistory } from 'react-router-dom';
import styles from './main.module.css'

const Main = ({authService, onsearch, druginfo}) => {
  const history = useHistory();
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
    return(
        <main> 
          <Header onlogOut={logout} />
          <section className={styles.section}>
            <article className={styles.editor}>
            <Editor handleSearch={handleSearch} />
           
            </article>
            <Save />
          </section>
        </main>
    )
}

export default Main;