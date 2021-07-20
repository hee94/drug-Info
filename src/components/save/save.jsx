import React from 'react';
import SaveList from './savelist';
import styles from './save.module.css'
const Save = ({update}) => {
    console.log(update)
    return(
        <ul className={styles.ul}>
            {update && 
            update.map(list =>(<SaveList key={list.id} savelist={list} />))
            }
        </ul>
        
    )
}

export default Save;