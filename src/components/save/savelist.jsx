import React from 'react';
import styles from './savelist.module.css'

const SaveList = ({savelist,deleteClick}) => {
   const onclick =(e)=>{
       e.preventDefault();
       deleteClick(savelist.id)
   }
    return(
        <li className={styles.li}>
                <h4 className={styles.name}>{savelist.name}</h4>
                <h4 className={styles.eat}>{savelist.eatchk}</h4>
                <h4 className={styles.time}>{savelist.timechk.toString()}</h4>
                <p className={styles.use}>{savelist.use.replace(/(<p>)|<\/p>/g,'')}</p>
                <span className={styles.memo}>{savelist.memo}</span>
                <button className={styles.delbtn} onClick={onclick}>삭제</button>
        </li>
    )
}

export default SaveList;