import React from 'react';
import styles from './form.module.css';

const AddForm = (props) => {
    return(
        <ul className={styles.list}>
            <li className={styles.title}>Drug The Beat</li>
            <li>인원 추가/삭제</li>
        </ul>
    )
}
    

export default AddForm;
