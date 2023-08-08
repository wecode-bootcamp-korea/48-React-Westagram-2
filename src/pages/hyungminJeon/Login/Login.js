import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    userId: "",
    userPw: "",
  });

  const goToMain = () => {
    if (isActive) {
      navigate("/hyungminjeon-main");
    } else {
      alert("아이디를 확인해주세요.");
    }
  };

  const goToNoLogin = () => {
    alert("로그인을 해주세요.");
  };

  const handleInput = (event) => {
    console.log(event);
    const { value, id } = event.target;
    setUserInfo({ ...userInfo, [id]: value });
  };

  const isActive = userInfo.userId.includes("@") && userInfo.userPw.length >= 5;

  return (
    <div className="login">
      <div className="box_border">
        <button className="logo_btn" onClick={goToNoLogin}>
          <img
            src="/images/hyungminJeon/logo_instagram.png"
            className="logo"
            alt="logo"
          />
        </button>
        <div className="info_box">
          <input
            id="userId"
            type="text"
            className="text_box"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleInput}
          />
          <input
            id="userPw"
            type="text"
            className="text_box"
            placeholder="비밀번호"
            onChange={handleInput}
          />
          <button className="login_click" type="button" onClick={goToMain}>
            로그인
          </button>
        </div>
        <div className="forgot_password">
          <Link to="/password">비밀번호를 잊으셨나요?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
