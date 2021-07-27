import React from 'react';
import styles from './druglist.module.css';
import ItemList from './itemlist';
const DrugList = ({list , updateInfo}) =>{
    console.log('list')
    return(
        <ul className={styles.list}>
            {list.map(item => (
    <ItemList key={list.id} item={item} onupdateInfo={updateInfo}/>
    ))}
        </ul>
    )
};
export default DrugList;