import React from 'react';
import SaveList from './savelist';
import styles from './save.module.css'
const Save = ({update,ondelete}) => {
    const deleteClick =(id)=>{
        ondelete(id);
    }
    return(
        <ul className={styles.ul}>
            {update && 
            update.map(list =>(<SaveList key={list.id} savelist={list} deleteClick={deleteClick} />))
            }
        </ul>
        
    )
}

export default Save;