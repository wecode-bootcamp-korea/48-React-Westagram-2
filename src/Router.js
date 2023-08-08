import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// hyoeun Jung 의 컴포넌트
import MainHyoeunJung from "./pages/hyoeunJung/Main/Main";
import LoginHyoeunJung from "./pages/hyoeunJung/Login/Login";

// hyungmin Jeon 의 컴포넌트
import MainHyungminJeon from "./pages/hyungminJeon/Main/Main";
import LoginHyungminJeon from "./pages/hyungminJeon/Login/Login";

// jinhee Kim 의 컴포넌트
import MainJinheeKim from "./pages/jinheeKim/Main/Main";
import LoginJinheeKim from "./pages/jinheeKim/Login/Login";

// minyoung Kang 의 컴포넌트
import MainMinyoungKang from "./pages/minyoungKang/Main/Main";
import LoginMinyoungKang from "./pages/minyoungKang/Login/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hyoeunjung-main" element={<MainHyoeunJung />} />
        <Route path="/hyoeunjung-login" element={<LoginHyoeunJung />} />
        <Route path="/hyungminjeon-main" element={<MainHyungminJeon />} />
        <Route path="/hyungminjeon-login" element={<LoginHyungminJeon />} />
        <Route path="/jinheekim-main" element={<MainJinheeKim />} />
        <Route path="/jinheekim-login" element={<LoginJinheeKim />} />
        <Route path="/minyoungkang-main" element={<MainMinyoungKang />} />
        <Route path="/minyoungkang-login" element={<LoginMinyoungKang />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
