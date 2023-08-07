import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../../../style/reset.scss";
import "../../../style/common.scss";
import "../../../style/variables.scss"
import "./Login.scss";


const Login = () => {
  const saveUserId = (e) => {
};
  const [id, setId] = useState('event.target.value');

  const saveUserPw = (e) => {
};
  const [pw, setPw] = useState('event.target.value');

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