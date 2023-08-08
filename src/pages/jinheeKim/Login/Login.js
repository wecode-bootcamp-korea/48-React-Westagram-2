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
  /*
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const saveUserId = (event) => {
    setId(event.target.value);
};
  const saveUserPw = (event) => {
    setPw(event.target.value);
  };
  위 두 줄을 아래처럼 하나로 묶음
  */

  /*const saveUserId = (event) => {
    const {value} = event.target;
    setUserInfo({...userInfo, id:value});
  };
  
  const saveUserPw = (event) => {
    const {value} = event.target;
    setUserInfo({...userInfo, pw:value});
  };*/


  const [userInfo, setUserInfo] = useState({
    userId:"아이디",
    userPw:"패스워드",
  });

  const handleInput = (event) => {
    const {value, id} = event.target;
    setUserInfo({...userInfo, [id]:value});
  };


  // ...userInfo > 스프레드연산자. userInfo는 객체. id, pw 키를 갖고 있음. 이를 분해
  // 중복되는 키는 오른쪽 새로운 value 값으로 변경됨. > id가 ""에서 value로 변경.


  const isValue = userInfo.userId.includes('@') && userInfo.userPw.length >= 5;

  return (
    <div className="login">
      <div className="box">
        <h1>Westagram</h1>
        <div className="input-txt">
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