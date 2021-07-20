import React from 'react';
import styles from './iteminfo.module.css';

const ItemInfo = ({item}) => {
    return(
        <li className={styles.list}>
            <h4 className={styles.name}>{item.itemName}
            <span className={styles.entp}>{item.entpName}</span></h4>
            {item.itemImage && <p><img src={item.itemImage} 
           alt="약" className={styles.img}></img></p>}
          
           
           <p><span className={styles.title}>사용증상 : </span>{item.efcyQesitm.replace(/(<p>)|<\/p>/g,'')}</p>
           <p><span className={styles.title}>복용방법 :</span> {item.useMethodQesitm.replace(/(<p>)|<\/p>/g,'')}</p>
           <p><span className={styles.title}>부작용 : </span> {item.seQesitm.replace(/(<p>)|<\/p>/g,'')}</p>
           <p><span className={styles.title}>주의사항 :</span> {item.atpnQesitm.replace(/(<p>)|<\/p>/g,'')}</p>
        </li>
    )
}

export default ItemInfo;