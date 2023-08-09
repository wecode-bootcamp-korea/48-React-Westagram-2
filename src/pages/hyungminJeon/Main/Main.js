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
      {/* 메인페이지 왼쪽 */}
      <div></div>
      {/* 메인페이지 오른쪽 상단 */}
      <div></div>
      {/* 메인페이지 오른쪽 중간 */}
      <div></div>
      {/* 메인페이지 오른쪽 하단 */}
      <div></div>
    </div>
  );
};

export default Main;
