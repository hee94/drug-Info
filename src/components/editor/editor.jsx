import React, { useRef, useState } from 'react';
import styles from './editor.module.css';
import DrugInformation from '../info/druginformation'
import DrugList from '../info/druglist'
import TimeCheckbox from './timecheckbox';
import EatCheckbox from './eatcheckbox';

const Editor = ({handleSearch,drugList,druginfo, updateInfo, onsave}) => {
    const searchformRef = useRef();
    const searchRef = useRef();
    const areaRef = useRef();
    const checkformRef = useRef();
    const [checkedInput, setCheckedInput] = useState([]);
    const [eatchk, setEatchk] = useState('');

    const onsubmit =(e)=>{
        e.preventDefault();
        let drugName = searchRef.current.value;
        handleSearch(drugName);
        searchformRef.current.reset();
    }
    const CheckedBox =(checked, id)=>{
        if(druginfo){
            if (checked) {
                setCheckedInput([...checkedInput,id]);
              } else {
                setCheckedInput(checkedInput.filter((item) => item !== id));
              }
        }else{console.log('인포없음')}
    }
    const CheckedRadio  = (check)=>{
        if(druginfo){
            setEatchk(check)
        }else {
            console.log('없음')
        }
      
    }
    const updateSave =(e)=>{
        e.preventDefault();
        const text = areaRef.current.value;
        onsave(eatchk,checkedInput, text)
        checkformRef.current.reset();
        setCheckedInput([]);
        setEatchk('');
    }
    return(
        <section className={styles.menu}>
            <form className={styles.searchBox} ref={searchformRef} onSubmit={onsubmit}>
                <input type="text" ref={searchRef} 
                className={styles.searchbar} placeholder="약이름을 입력해주세요" />
                <button type="submit" className={styles.btn}>검색</button>
            </form>
            <p className={styles.warning}>모든 약의 정보를 가지고 있지 않으므로, 검색결과가 없는 경우도 있습니다.</p>
            {drugList && <DrugList list={drugList} updateInfo={updateInfo}/>}
            {druginfo && <DrugInformation info={druginfo} />}
            <form className={styles.drugCard} 
            onSubmit={updateSave} ref={checkformRef}>
                {druginfo ?  <h3 className={styles.drugName}>{druginfo[0].itemName}</h3> : <h3 className={styles.drugName}>이름</h3> }
                {druginfo ? <span className={styles.drugcompany}>{druginfo[0].entpName}</span> : <span className={styles.drugcompany}>제조회사</span> }
                <TimeCheckbox CheckedBox={CheckedBox} />
                <EatCheckbox CheckedRadio={CheckedRadio} />
                <textarea ref={areaRef} className={styles.text} placeholder="필요한 메모를 해두세요!" />
                <button className={styles.submitbtn}>저장</button> 
            </form>
            
                 
            
        </section>
    )
}

export default Editor;