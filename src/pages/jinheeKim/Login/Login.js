import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../../../style/reset.scss";
import "../../../style/common.scss";
import "../../../style/variables.scss"
import "./Login.scss";


const Login = () => {
  const [id, setId] = useState('');
  const saveUserId = (event) => {
    setId(event.target.value);
    console.log(id);
};
  
  const [pw, setPw] = useState('');
  const saveUserPw = (event) => {
    setPw(event.target.value);
    console.log(pw);
};
  

  return (
    <div className="login">
      <div className="box">
        <h1>Westagram</h1>
        <div className="input-txt">
          <input
            onChange={saveUserId} 
            type="text"
            className="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            />
          <input
            onChange={saveUserPw}
            type="password"
            className="pw"
            placeholder="비밀번호"
            />
          <div className="login-btn">
            <Link to="/jinheekim-main"><button>로그인</button></Link>
          </div>
          <div className="findPw">
            <a href="#">비밀번호를 잊으셨나요?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;