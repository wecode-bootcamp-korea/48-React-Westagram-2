import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {} from "react-icons/fa";
import "./Main.scss";

const Main = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="main">
      {/* 상단 내비게이션바 */}
      <nav className="mainNav">
        <div></div>
        <span>|</span>
        <div></div>
      </nav>
      <div className="mainBody">
        {/* 메인페이지 왼쪽 */}
        <div className="bodyLeft">왼쪽</div>
        {/* 메인페이지 오른쪽 */}
        <div className="bodyRight">
          오른쪽
          {/* 메인페이지 오른쪽 상단 */}
          <div>오른쪽 상단</div>
          {/* 메인페이지 오른쪽 중간 */}
          <div>오른쪽 중간</div>
          {/* 메인페이지 오른쪽 하단 */}
          <div className="divFooter">
            {DIV_FOOTER.map((info) => (
              <Link to="/" className="footerInfo">
                {info}
              </Link>
            ))}
            <span>2019 WESTAGRAM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

const DIV_FOOTER = [
  "Westagram 정보 ",
  "지원 ",
  "홍보 센터 ",
  "API ",
  "채용 정보 ",
  "개인정보처리방침 ",
  "약관 ",
  "디렉터리 ",
  "프로필 ",
  "해시태그 ",
  "언어",
];
