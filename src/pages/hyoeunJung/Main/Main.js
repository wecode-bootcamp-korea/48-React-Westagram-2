import React, { useEffect, useState } from "react";
import "./Main.scss";
import FOOTER_DATA from "./footerData";

const Main = () => {
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState("");

  const handleInputComment = (event) => {
    setComment(event.target.value);
  };

  const handleButton = () => {
    setCommentList([...commentList, comment]);
  };

  //mock data 구현시도
  useEffect(() => {
    fetch("/data/feedsData.json", {})
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    // nav 바
    <div className="main">
      <nav className="nav">
        <div className="mainLogo">
          <img className="navImages" src="/images/hyoeunJung/instagram.png" />
          <h3 className="navFont">WESTAGRAM</h3>
        </div>
        <input className="navInput" type="text" placeholder="검색" />
        <div className="imgsElements">
          <img className="navImages" src="/images/hyoeunJung/compass.png" />
          <img className="navImages" src="/images/hyoeunJung/heart.png" />
          <img className="navImages" src="/images/hyoeunJung/user.png" />
        </div>
      </nav>

      <main className="align">
        <div className="leftfeed">
          <div className="topWrap">
            <div className="userName">
              <img
                className="topUser"
                src="/images/hyoeunJung/sand2.png"
                alt="동그란이미지사진"
              />
              <div>
                <p>sand1111/</p>
                <p>wecode-위코드</p>
              </div>
            </div>
            <img src="/images/hyoeunJung/forward.png" />
          </div>
          <img className="feedImage" src="/images/hyoeunJung/sand1.png" />

          {/* 피드 밑 아이콘 */}
          <div className="imgsElements">
            <img className="feedImages" src="/images/hyoeunJung/heart.png" />
            <img className="feedImages" src="/images/hyoeunJung/msg.png" />
            <img className="feedImages" src="/images/hyoeunJung/download.png" />
          </div>

          {/*피드 아이곤 아래 좋아합니다 부분*/}

          <div className="imgWrap">
            <img
              className="likeImage"
              src="/images/hyoeunJung/sand4.png"
              alt="동그란사진"
            />
            <div>
              <p>sand님 외 4명이좋아합니다</p>
              <p>
                모래 귀여워<a> 더 보기</a>
              </p>
            </div>
          </div>
          <div className="reviewArea">
            {commentList.map((review) => (
              <p>{review}</p>
            ))}
          </div>
          <div className="comment">
            <input
              type="text"
              placeholder="댓글 달기..."
              onChange={handleInputComment}
              value={comment}
            />
            <button onClick={handleButton} value={commentList}>
              게시
            </button>

            {/* {commentList.map((review) => (
              <p>{review}</p>
            ))} */}

            {/* <div>{commentList[0]}</div>
            <div>{commentList[1]}</div>
            <div>{commentList[2]}</div>
            <div>{commentList[3]}</div> */}
          </div>
        </div>
        {/* 오른쪽부분 */}
        <div className="rightFeed">
          <div className="topRight">
            <img
              className="rightUser"
              src="/images/hyoeunJung/sand2.png"
              alt="동그란사진"
            />
            <div className="rightTag">
              <p>wecode_bootcamp</p>
              <p>WeCode위코드</p>
            </div>
          </div>
          {/* 스토리좋아요박스 */}
          <div className="storyBox">
            <div className="likeStory">
              <p>스토리</p>
              <p>모두 보기</p>
            </div>

            <div className="like">
              <img
                className="rightImages"
                src="/images/hyoeunJung/sand3.png"
                alt="동그란사진"
              />
              <div className="likeUser">
                <p>user</p>
                <p>5시간 전</p>
              </div>
            </div>
            <div className="like">
              <img
                className="rightImages"
                src="/images/hyoeunJung/sand3.png"
                alt="동그란사진"
              />
              <div className="likeUser">
                <p>user</p>
                <p>5시간 전</p>
              </div>
            </div>
            <div className="like">
              <img
                className="rightImages"
                src="/images/hyoeunJung/sand3.png"
                alt="동그란사진"
              />
              <div className="likeUser">
                <p>user</p>
                <p>5시간 전</p>
              </div>
            </div>
          </div>

          {/* 회원님을위한추천 */}
          <div className="proposeBox">
            <div className="propose">
              <p>회원님을 위한 추천</p>
              <p>모두 보기</p>
            </div>
            <div className="buttonAlign">
              <div className="proposeWrap">
                <div className="proposeUser">
                  <div className="proposeImage">
                    <img
                      className="proposeImages"
                      src="/images/hyoeunJung/sand1.png"
                      alt="동그란사진"
                    />
                  </div>

                  <div className="proposeText">
                    <p>im</p>
                    <p>oo님 외 3명이 팔...</p>
                  </div>
                </div>
              </div>
              <button className="proposeButton">팔로우</button>
            </div>
            <div className="buttonAlign">
              <div className="proposeWrap">
                <div className="proposeUser">
                  <div className="proposeImage">
                    <img
                      className="proposeImages"
                      src="/images/hyoeunJung/sand1.png"
                      alt="동그란사진"
                    />
                  </div>

                  <div className="proposeText">
                    <p>im</p>
                    <p>oo님 외 3명이 팔...</p>
                  </div>
                </div>
              </div>
              <button className="proposeButton">팔로우</button>
            </div>
            <div className="buttonAlign">
              <div className="proposeWrap">
                <div className="proposeUser">
                  <div className="proposeImage">
                    <img
                      className="proposeImages"
                      src="/images/hyoeunJung/sand1.png"
                      alt="동그란사진"
                    />
                  </div>

                  <div className="proposeText">
                    <p>im</p>
                    <p>oo님 외 3명이 팔...</p>
                  </div>
                </div>
              </div>
              <button className="proposeButton">팔로우</button>
            </div>
          </div>
          <div className="footerBar">
            {FOOTER_DATA.map((info) => (
              <span key={info.id}>
                <a className="footerDeco" href={info.link}>
                  {info.text}
                </a>
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
