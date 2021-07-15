import React, { useRef } from 'react';
import styles from './editor.module.css';
import DrugInformation from '../info/druginformation'
import DrugList from '../info/druglist'

const Editor = ({handleSearch,drugList,druginfo}) => {
    const formRef = useRef();
    const searchRef = useRef();
    const onsubmit =(e)=>{
        e.preventDefault();
        let drugName = searchRef.current.value;
        handleSearch(drugName);
        formRef.current.reset();
    }
    return(
        <section className={styles.menu}>
            <form className={styles.searchBox} ref={formRef} onSubmit={onsubmit}>
            <input type="text" ref={searchRef} 
            className={styles.searchbar} placeholder="약이름을 입력해주세요" />
            <button type="submit" className={styles.btn}>검색</button>
            </form>
            {drugList && <DrugList />}
            {druginfo && <DrugInformation />}
            <form className={styles.drugCard}>
                {druginfo ?  <h3 className={styles.drugName}>{druginfo[0].itemName}</h3> : <h3 className={styles.drugName}>이름</h3> }
                {druginfo ? <span className={styles.drugcompany}>{druginfo[0].entpName}</span> : <span className={styles.drugcompany}>제조회사</span> }
                <article className={styles.drugTime}>
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
                </article>
                <article className={styles.drugeat}>
                <label htmlFor="before">식전
                <input type="checkbox" name="eat" value="before" id="before"
                className={styles.eatchk} /></label>
                <label htmlFor="after">식후
                <input type="checkbox" name="eat" value="after" id="after"
                className={styles.eatchk} />
                </label>
                <label htmlFor="sameTime">식사와 함께
                <input type="checkbox" name="eat" value="sameTime" id="sameTime"
                className={styles.eatchk} />
                </label>
               <label htmlFor="starve">공복
               <input type="checkbox" name="eat" value="starve" id="starve" 
                className={styles.eatchk} /></label>
                </article>
                <textarea className={styles.text} placeholder="필요한 메모를 해두세요!" />
                <p className={styles.use}></p>
                <button className={styles.submitbtn}>저장</button> 
            </form>
            
                 
            
        </section>
    )
}

export default Editor;