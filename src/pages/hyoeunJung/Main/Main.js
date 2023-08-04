import React from "react";
import "./Main.scss";

const Main = () => {
  return (
    // nav 바
    <div className="main">
      <nav className="nav">
        <div className="main-logo">
          <img className="nav-images" src="/images/instagram.png" />
          <h3 className="nav-font">WESTAGRAM</h3>
        </div>
        <input className="nav-input" type="text" placeholder="검색" />
        <div className="imgsElements">
          <img className="nav-images" src="/images/compass.png" />
          <img className="nav-images" src="/images/heart.png" />
          <img className="nav-images" src="/images/user.png" />
        </div>
      </nav>
      <main>
        <div>
          {/* 왼쪽편 */}
          {/* 피드이미지 */}
          <div className="top-wrap">
            <div className="user-name">
              <img
                className="top-user"
                src="/images/sand2.png"
                alt="동그란이미지사진"
              />
              <div>
                <p>sand1111/</p>
                <p>wecode-위코드</p>
              </div>
            </div>
            <img src="/images/forward.png" />
          </div>
          <img className="sand" src="/images/sand1.png" />

          {/* 피드 밑 아이콘 */}
          <div className="imgsElements">
            <img className="images" src="/images/heart.png" />
            <img className="images" src="/images/msg.png" />
            <img className="images" src="/images/download.png" />
          </div>

          {/*피드 아이곤 아래 좋아합니다 부분*/}

          <div>
            <img src="" alt="동그란사진" />
            <p>님 외 4명이좋아합니다</p>
            <p>
              sand ㅇㅁㄴㄹㄴㅁㅇㄹㅇㅁㅇ<a> 더 보기</a>
            </p>
          </div>
          <input type="text" placeholder="댓글 달기..." />
          <button>게시</button>
        </div>
        {/* 오른쪽부분 */}
        <div>
          <div>
            <img src="" alt="동그란사진" />
            <p>wecode_bootcamp</p>
            <p>WeCode위코드</p>
          </div>
          {/* 스토리좋아요박스 */}
          <div>
            <p>스토리</p>
            <div>모두 보기</div>
          </div>

          <div>
            <img src="" alt="동그란사진" />
            <p>1번</p>
            <p>시간 전</p>
          </div>
          <div>
            <img src="" alt="동그란사진" />
            <p>1번</p>
            <p>시간 전</p>
          </div>
          <div>
            <img src="" alt="동그란사진" />
            <p>1번</p>
            <p>시간 전</p>
          </div>
          {/* 회원님을위한추천 */}
          <div>
            <p>회원님을 위한 추천</p>
            <p>모두 보기</p>
          </div>
          <div>
            <div>
              <p>im</p>
              <p>oo님 외 3명이 팔...</p>
            </div>

            <button>팔로우</button>
          </div>
          <div>
            <div>
              <p>im</p>
              <p>oo님 외 3명이 팔...</p>
            </div>

            <button>팔로우</button>
          </div>
          <div>
            <div>
              <p>im</p>
              <p>oo님 외 3명이 팔...</p>
            </div>

            <button>팔로우</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
