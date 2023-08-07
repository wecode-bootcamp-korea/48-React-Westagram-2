import React from "react";
import "./Main.scss";

const Main = () => {
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

      <main>
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
            <p>sand님 외 4명이좋아합니다</p>
            <p>
              모래 귀여워<a> 더 보기</a>
            </p>
          </div>
          <div className="comment">
            <input type="text" placeholder="댓글 달기..." />
            <button>게시</button>
          </div>
        </div>
        {/* 오른쪽부분 */}
        <div>
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
              <div>모두 보기</div>
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
              <button>팔로우</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
