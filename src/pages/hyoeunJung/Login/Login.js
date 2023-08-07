import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const saveUserId = (event) => {
    setInputId(event.target.value);
  };
  console.log(inputId);
  const saveUserPw = (event) => {
    setInputPw(event.target.value);
    console.log(inputPw);
  };

  const goToMain = () => {
    navigate("/hyoeunjung-main");
  };
  const isInputValue = inputId.includes("@") && inputPw.length >= 5;

  return (
    <div className="loginContainer">
      <div className="logo">westagram</div>
      <div className="form">
        <input
          className="inputWrap"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={saveUserId}
          value={inputId}
        ></input>
        <input
          className="inputWrap"
          type="password"
          placeholder="비밀번호"
          onChange={saveUserPw}
          value={inputPw}
        ></input>
      </div>
      <div className="btnLogin">
        <button
          className={isInputValue ? "btn active" : "btn"}
          type="button"
          onClick={goToMain}
          disabled={!isInputValue}
        >
          로그인
        </button>
        <div className="rePasswordWrap">
          <a className="rePassword" href="#">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
