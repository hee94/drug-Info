import React from 'react';
import styles from './druginformation.module.css';
import ItemInfo from './iteminfo';

const DrugInformation = ({info}) =>{
   console.log('info')
    return(
       <ul className={styles.infobox}>
              {info.map(item => (
    <ItemInfo key={item.itemSeq} item={item} />
    ))}
       </ul>
    )
}

export default DrugInformation;