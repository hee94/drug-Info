import React from 'react';
import Save from './save/save';
import Header from './header';
import Footer from './footer';
import Editor from './editor/editor'

const Main = (props) => {
   
    return(
        <main> 
          <Header />
          <section>
          <Editor />
          <Save />
          </section>
          <Footer />
        </main>
    )
}

export default Main;