import React, { useRef } from 'react';
import styles from './editor.module.css';
import AddForm from '../addform/addform';

const Editor = ({handleSearch}) => {
    const searchRef = useRef();
    const onsubmit =(e)=>{
        e.preventDefault();
        const value = searchRef.current.value;
        handleSearch(value);
    }
    return(
        <section className={styles.menu}>
            <form className={styles.searchBox} onSubmit={onsubmit}>
            <input type="text" ref={searchRef} className={styles.searchbar} />
            <button type="submit" className={styles.btn}>검색</button>
            </form>
            <form className={styles.drugCard} >
                <h3 className={styles.drugName}>약이름</h3>
                <div className={styles.drugTime}>
                <label htmlFor="bb">아침공복
                <input type="checkbox" name="time" value="beforeBreakfast" id="bb"
                className={styles.timechk} /></label>
                <label htmlFor="bf">아침
                <input type="checkbox" name="time" value="Breakfast" id="bf"
                className={styles.timechk} />
                </label>
                <label htmlFor="lunch">점심
                <input type="checkbox" name="time" value="lunch" id="lunch"
                className={styles.timechk} />
                </label>
               <label htmlFor="dinner">저녁
               <input type="checkbox" name="time" value="dinner" id="dinner" 
                className={styles.timechk} /></label>
               <label htmlFor="bs">자기전
               <input type="checkbox" name="time" value="beforeSleep" id="bs"
                className={styles.timechk} />
               </label>
                </div>
            </form>
            <p className={styles.infoBox}></p>     
                 
            
            <AddForm />
        </section>
    )
}

export default Editor;