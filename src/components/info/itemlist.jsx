import React from 'react';
import styles from './item.module.css'

const ItemList = ({item, onupdateInfo }) => {
    item&&console.log(item)
    const updateInfo =()=>{
        onupdateInfo(item)
    }
    return(
    <li onClick={updateInfo} className={styles.name}>{item.itemName} 
     {item.itemImage && <img className={styles.img} src={item.itemImage} alt="약사진정보" />}
     </li>)
};
export default ItemList;