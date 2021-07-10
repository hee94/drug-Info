import Header from '../header'
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styles from './login.module.css'

const Login = ({authService }) => {
    const history = useHistory();
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");

    useEffect(()=>{
      authService.onAuthChange(user =>{
        user && GoToMain(user.uid);
    })
    })

    const handleOnChange = (e) => {
        const type = e.target.name;
        if (type === "email") {
          setEmail(e.target.value);
        } else if (type === "password") {
          setPassword(e.target.value);
        }
      };
    
    const GoToMain = (usrId) =>{
      history.push({
        pathname : '/main',
        state : {id:usrId},
      })
      
    }
    const onLogin = (event) =>{
        authService //
        .login(event.currentTarget.textContent)
        .then(data =>GoToMain(data.user.uid))
    }
    const onJoin = () =>{
        history.push("/join");
    }
    const EmailLogin = (e)=>{
      e.preventDefault();
        authService//
        .onEmailLogin(email, password)
        .then(data =>GoToMain(data.user.uid))
        .catch((error) => {
           const errorCode = error.code;
            switch (errorCode){
              case "auth/user-not-found" :
                alert('유저를 찾을 수 없습니다');
                break;
              case "auth/wrong-password" :
                alert('비밀번호가 틀립니다');
                break;
              default : break;
            }
          });
    }

    
    return(
        <div className={styles.loginBox}>
            <Header />
            <p className={styles.subtitle}> Login</p>
          <form className={styles.email_pw_box} onSubmit={EmailLogin}>
              <input type="text" className={styles.email} name="email"
              placeholder="이메일" onChange={handleOnChange} />
              <input type="password" className={styles.pw} name="password"
              placeholder="비밀번호" onChange={handleOnChange} />
              <button type="submit" className={styles.btn} >로그인</button>
          </form>
          <button className={styles.loginbtn} onClick={onLogin}>Google</button>
            <button className={styles.loginbtn} onClick={onLogin}>Github</button>
            <button className={styles.loginbtn} onClick={onJoin}>join</button>
  
        </div>
    )
}

export default Login;