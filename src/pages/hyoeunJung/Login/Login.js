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

  const saveUserPw = (event) => {
    setInputPw(event.target.value);
  };

  const goToMain = () => {
    //백엔드랑 연결안했을때 메인페이지로 이동!
    navigate("/hyoeunjung-main");
    //통신연결
    // fetch("http://10.58.52.144:3000/users/signup", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: inputId,
    //     password: inputPw,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.accessToken) {
    //       localStorage.setItem("token", data.accessToken);
    //       navigate("/hyoeunjung-main");
    //     }
    //     console.log(data.message);
    //     console.log(data.accessToken);
    //     if (data.message === "specified user does not exist") {
    //       alert("존재하지 않는 유저입니다.");
    //     }
    //   });
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
          // value={inputId}
        ></input>
        <input
          className="inputWrap"
          type="password"
          placeholder="비밀번호"
          onChange={saveUserPw}
          // value={inputPw}
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
