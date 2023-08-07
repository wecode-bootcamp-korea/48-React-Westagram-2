import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [inputId, setInputId] = useState();
  const [inputPw, setInputPw] = useState();

  const saveUserId = (event) => {
    setInputId(event.target.value);
    console.log(inputId);
  };

  const saveUserPw = (event) => {
    setInputPw(event.target.value);
    console.log(inputPw);
  };

  const goToMain = () => {
    navigate("/hyoeunjung-main");
  };

  return (
    <div className="login-container">
      <div className="logo">westagram</div>
      <div className="form">
        <input
          className="input-wrap"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={saveUserId}
          value={inputId}
        ></input>
        <input
          className="input-wrap"
          type="password"
          placeholder="비밀번호"
          onChange={saveUserPw}
          value={inputPw}
        ></input>
      </div>
      <div className="btn-login">
        <button className="btn" type="button" onClick={goToMain}>
          로그인
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
