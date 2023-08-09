import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../../../style/reset.scss";
import "../../../style/common.scss";
import "../../../style/variables.scss"
import "./Login.scss";


const Login = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/jinheekim-main');
  }

  const [userInfo, setUserInfo] = useState({
    userId:"아이디",
    userPw:"패스워드",
  });

  const handleInput = (event) => {
    const {value, id} = event.target;
    setUserInfo({...userInfo, [id]:value});
  };

  const isValue = userInfo.userId.includes('@') && userInfo.userPw.length >= 5;

  return (
    <div className="login">
      <div className="box">
        <h1>Westagram</h1>
        <div className="inputTxt">
          <input
            id="userId"
            onChange={handleInput}
            type="text"
            className="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            />
          <input
            id="userPw"
            onChange={handleInput}
            type="password"
            className="pw"
            placeholder="비밀번호"
            />
          <button type="button" onClick={goToMain} className={isValue ? "abled-button" : 'disabled-button'} disabled={!isValue}>로그인</button>
          <div className="findPw">
            <a href="#">비밀번호를 잊으셨나요?</a>
          </div>
        </div>                                                                                                                                      
      </div>
    </div>
  );
};

export default Login;