import React from "react";
import "./Login.scss";

import { Link } from "react-router-dom";

// 위에거 맞는지 모르겠음 밑에 버튼에 링크넣음 3-4-1. Link 컴포넌트 사용하기
// 2가지 방법 1.함수 2.링크연결(?) 몰루??

const Login = () => {
  return (
    <div className="login-container">
      <div className="logo">westagram</div>
      <div className="form">
        <input
          className="input-wrap"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        ></input>
        <input
          className="input-wrap"
          type="password"
          placeholder="비밀번호"
        ></input>
      </div>
      <div className="btn-login">
        <button className="btn" type="button">
          {/* <a className="btn-deco" href="/main">
            로그인
          </a> */}
          <Link className="btn-deco" to="/main">
            로그인
          </Link>
        </button>
        <div className="re-password-wrap">
          <a className="re-password" href="#">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
