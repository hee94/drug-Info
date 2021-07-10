import React, { useEffect } from 'react';
import Save from './save/save';
import Header from './header';
import Footer from './footer';
import Editor from './editor/editor'
import { useHistory } from 'react-router-dom';

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
          <section>
          <Editor />
          <Save />
          </section>
          <Footer />
        </main>
    )
}

export default Main;