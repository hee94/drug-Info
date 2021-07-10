import  styles  from './join.module.css';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header  from '../header';

const Join = ({authService}) => {
    const history = useHistory();
    const idRef = useRef();
    const pwRef = useRef();
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
   
    const handleOnChange = (e) => {
        const type = e.target.name;
        if (type === "email") {
          setEmail(e.target.value);
        } else if (type === "password") {
          setPassword(e.target.value);
        }
       
      };

      const handleOnSubmit = e => {
        e.preventDefault();
        if (email !== "" && password !== "") {
            authService.createUser(email, password)
            .then(()=> {
            setPassword('');
            setEmail('');
            alert('가입되셨습니다. 메인페이지로 이동합니다');
            history.push('/')})
            .catch((error) => {
                const errorCode = error.code;
                switch (errorCode){
                    case "auth/email-already-in-use" :
                        alert('이메일 중복');
                        idRef.current.focus();
                        break;
                    case "auth/weak-password" :
                        alert('비밀번호는 6자리 이상이여야 합니다');
                        pwRef.current.focus();
                        break;
                    default : break;
                }
              });
            } 
           else {
              alert('이메일, 비밀번호 전부 입력해주세요')
           }
      };

    return(
        <form className={styles.container} onSubmit={handleOnSubmit}>
            {/* <h1 className={styles.title}> Drug Info</h1> */}
            <Header />
            <p className={styles.subtitle}>정보를 입력해주세요</p>
            <span className={styles.box_email}>
                <label >이메일
                <input ref={idRef} type="email" name="email" 
                placeholder="이메일을 입력하세요" className={styles.input}
                onChange={handleOnChange}/></label>
               
            </span>
            <span className={styles.box_pw}>
                <label>비밀번호
                <input ref={pwRef} type="password" name="password" 
                placeholder="6자리 이상"className={styles.input}
                onChange={handleOnChange}/>
                </label>
                
            </span>
            <button type="submit" className={styles.btn} value="join" >Join</button>
        </form>
    )
}

export default Join;