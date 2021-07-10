import React from 'react';
import styles from './header.module.css'

const Header = ({onlogOut}) => {
    
  return(
    <header>
    <h1 className={styles.title}>Drug Info</h1>
    {onlogOut &&  <button onClick={onlogOut}>logout</button>}
   
   
</header>  
  )
}

export default Header;