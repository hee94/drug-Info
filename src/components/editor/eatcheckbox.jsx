import React from 'react';
import styles from './eatcheckbox.module.css';

const EatCheckbox = ({CheckedRadio}) => {
    const onChecked =(e)=>{
        CheckedRadio(e.target.value)
    }
    return(
        <article className={styles.drugeat}>
                <label htmlFor="before">식전
                <input type="radio" name="eat" value="식전" id="before"
                className={styles.eatchk} onClick={onChecked}/></label>
                <label htmlFor="after">식후
                <input type="radio" name="eat" value="식후" id="after"
                className={styles.eatchk} onClick={onChecked} />
                </label>
                <label htmlFor="sameTime">식사와 함께
                <input type="radio" name="eat" value="식사와 함께" id="sameTime"
                className={styles.eatchk} onClick={onChecked} />
                </label>
               <label htmlFor="starve">공복
               <input type="radio" name="eat" value="공복" id="starve" 
                className={styles.eatchk} onClick={onChecked} /></label>
                </article>
    )
}

export default EatCheckbox;