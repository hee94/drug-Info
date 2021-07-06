import React from 'react';
import styles from './editor.module.css';
import AddForm from '../addform/addform';

const Editor = (props) => {
    return(
        <section className={styles.menu}>
            <AddForm />
        </section>
    )
}

export default Editor;