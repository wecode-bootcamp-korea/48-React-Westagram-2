import React, { useState, useEffect } from "react";
import MainFeeds from "./MainFeeds";
import "./Main.scss";
import compass from "../assets/icon/compass.png";
import heart from "../assets/icon/heart.png";
import instagram from "../assets/icon/instagram.png";
import search from "../assets/icon/search.png";
import user from "../assets/icon/user.png";
import userimg from "../assets/images/test.jpg";
import feedimg from "../assets/images/test.jpg";

const INFO_LIST = [
  { id: 1, link: "https://instargram.com", text: "소개" },
  { id: 1, link: "https://instargram.com", text: "소개" },
  { id: 1, link: "https://instargram.com", text: "소개" },
  { id: 1, link: "https://instargram.com", text: "소개" },
  { id: 1, link: "https://instargram.com", text: "소개" },
  { id: 1, link: "https://instargram.com", text: "소개" },
  { id: 1, link: "https://instargram.com", text: "소개" },
];

const Main = () => {
  return (
    <>
      <nav className="nav">
        <div className="navLeft">
          <img className="navIcon iconInstagram" alt="." src={instagram} />
          <span className="logo">Westagram</span>
        </div>
        <div className="searchBar">
          <img className="iconSearch" alt="." src={search} />
          <input
            className="searchBox"
            type="text"
            aria-label="검색창"
            placeholder="검색"
          />
        </div>
        <div className="navRight">
          <img className="navIcon" alt="." src={compass} />
          <img className="navIcon" alt="." src={heart} />
          <img className="navIcon" alt="." src={user} />
        </div>
      </nav>
      <div className="main">
        <MainFeeds />
        <div className="mainRight">
          <div className="mainRightTop">
            <div className="photo">
              <img src={userimg} alt="."></img>
            </div>
            <div className="name">
              <p className="username">jini</p>
              <p className="username2">지니지니</p>
            </div>
          </div>
          <div className="stories">
            <div className="storiesTop">
              <p className="story">스토리</p>
              <p>모두 보기</p>
            </div>
            <div className="storyPeople">
              <div className="photo">
                <img src={userimg} alt="."></img>
              </div>
              <div className="name">
                <p className="username">jini</p>
                <p className="username2">지니지니</p>
              </div>
            </div>
            <div className="storyPeople">
              <div className="photo">
                <img src={userimg} alt="."></img>
              </div>
              <div className="name">
                <p className="username">jini</p>
                <p className="username2">지니지니</p>
              </div>
            </div>
            <div className="storyPeople">
              <div className="photo">
                <img src={userimg} alt="."></img>
              </div>
              <div className="name">
                <p className="username">jini</p>
                <p className="username2">지니지니</p>
              </div>
            </div>
            <div className="storyPeople">
              <div className="photo">
                <img src={userimg} alt="."></img>
              </div>
              <div className="name">
                <p className="username">jini</p>
                <p className="username2">지니지니</p>
              </div>
            </div>
          </div>
          <div className="recommend">
            <div className="storiesTop">
              <p className="story">회원님을 위한 추천</p>
              <p>모두 보기</p>
            </div>
            <div className="storyPeople">
              <div className="photo">
                <img src={userimg} alt="."></img>
              </div>
              <div className="name">
                <p className="username">jini</p>
                <p className="username2">지니지니</p>
              </div>
              <button>팔로우</button>
            </div>
            <div className="storyPeople">
              <div className="photo">
                <img src={userimg} alt="."></img>
              </div>
              <div className="name">
                <p className="username">jini</p>
                <p className="username2">지니지니</p>
              </div>
              <button>팔로우</button>
            </div>
            <div className="storyPeople">
              <div className="photo">
                <img src={userimg} alt="."></img>
              </div>
              <div className="name">
                <p className="username">jini</p>
                <p className="username2">지니지니</p>
              </div>
              <button>팔로우</button>
            </div>
            <div className="storyPeople">
              <div className="photo">
                <img src={userimg} alt="."></img>
              </div>
              <div className="name">
                <p className="username">jini</p>
                <p className="username2">지니지니</p>
              </div>
              <button>팔로우</button>
            </div>
          </div>
          <div>
            <ul>
              {INFO_LIST.map((info) => {
                return (
                  <li key={info.id}>
                    <a href="{info.link}">{info.text}</a>
                  </li>
                );
              })}
            </ul>
            <p className="copyright">ⓒ 2023 WESTAGRAM</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
