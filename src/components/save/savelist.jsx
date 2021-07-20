import React from 'react';
import styles from './savelist.module.css'

const SaveList = ({savelist}) => {
    console.log(savelist.timechk.toString());
    return(
        <li className={styles.li}>
                <h4 className={styles.name}>{savelist.name}</h4>
                <h4 className={styles.eat}>{savelist.eatchk}</h4>
                <h4 className={styles.time}>{savelist.timechk.toString()}</h4>
                <p className={styles.use}>{savelist.use.replace(/(<p>)|<\/p>/g,'')}</p>
                <span className={styles.memo}>{savelist.memo}</span>
        </li>
    )
}

export default SaveList;