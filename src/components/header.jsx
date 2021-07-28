import React, { memo } from 'react';
import styles from './header.module.css'

const Header = memo(({onlogOut}) => {
  return(
    <header>
    <h1 className={styles.title}>Drug Info</h1>
    {onlogOut &&  <button className={styles.logoutBtn} onClick={onlogOut}>Logout</button>}
</header>  
  )
}
)
export default Header;