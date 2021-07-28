import React from 'react';
import styles from './timecheckbox.module.css';

const TimeCheckbox = ({CheckedBox}) => {
    const onChecked =(e)=>{
        CheckedBox(e.currentTarget.checked,e.target.value)
    }
   
    return(
        <article className={styles.drugTime}>
        <label htmlFor="beforeBreakfast">아침공복
        <input type="checkbox" name="time" value="아침공복" id="beforeBreakfast"
        className={styles.timechk}  onChange={onChecked} /></label>
        <label htmlFor="Breakfast">아침
        <input type="checkbox" name="time" value="아침" id="Breakfast"
        className={styles.timechk}  onChange={onChecked} />
        </label>
        <label htmlFor="lunch">점심
        <input type="checkbox" name="time" value="점심" id="lunch"
        className={styles.timechk}  onChange={onChecked} />
        </label>
       <label htmlFor="dinner">저녁
       <input type="checkbox" name="time" value="저녁" id="dinner" 
        className={styles.timechk}  onChange={onChecked} /></label>
       <label htmlFor="beforeSleep">자기전
       <input type="checkbox" name="time" value="자기전" id="beforeSleep"
        className={styles.timechk}  onChange={onChecked} />
       </label>
        </article>
    )
}

export default TimeCheckbox;