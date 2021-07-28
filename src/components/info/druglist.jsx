import React from 'react';
import styles from './druglist.module.css';
import ItemList from './itemlist';
const DrugList = ({list , updateInfo}) =>{
    return(
        <ul className={styles.list}>
            {list.map(item => (
    <ItemList key={item.itemSeq} item={item} onupdateInfo={updateInfo}/>
    ))}
        </ul>
    )
};
export default DrugList;