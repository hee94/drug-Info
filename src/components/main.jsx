import React, { useEffect } from 'react';
import Save from './save/save';
import Header from './header';
import Editor from './editor/editor'
import { useHistory } from 'react-router-dom';
import styles from './main.module.css'

const Main = ({authService}) => {
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
})
    return(
        <main> 
          <Header onlogOut={logout} />
          <section className={styles.section}>
            <article className={styles.editor}>
            <Editor />
            </article>
          <Save />
          </section>
        </main>
    )
}

export default Main;