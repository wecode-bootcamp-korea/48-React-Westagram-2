import React from "react";
import { Link } from 'react-router-dom';
import "../../../style/reset.scss";
import "../../../style/common.scss";
import "../../../style/variables.scss"
import "./Login.scss";


const Login = () => {
  return (
    <>
      <div className="login">
        <div className="box">
          <h1>Westagram</h1>
          <div className="input-txt">
            <input
              type="text"
              className="name"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              />
            <input
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
    </>
  );
};

export default Login;