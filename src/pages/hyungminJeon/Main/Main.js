import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Main.scss";

const Main = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="main">
      {/* 상단 내비게이션바 */}
      <nav>
        <div>
          <button className="" onClick={goToLogin}>
            <img src="/images/hyungminJeon/icon_logo.png" className="" alt="" />
          </button>
          <h1>|</h1>
          <button className="" onClick={goToLogin}>
            <img
              src="/images/hyungminJeon/logo_instagram.png"
              className=""
              alt=""
            />
          </button>
        </div>
        <div>
          <input type="text" className="" placeholder="검색" />
        </div>
        <div>
          <button className="">
            <img
              src="/images/hyungminJeon/logo_compass.png"
              className=""
              alt=""
            />
          </button>
          <button className="">
            <img
              src="/images/hyungminJeon/logo_heart.png"
              className=""
              alt=""
            />
          </button>
          <button className="">
            <img
              src="/images/hyungminJeon/logo_person.png"
              className=""
              alt=""
            />
          </button>
        </div>
      </nav>
      {/* 메인페이지 왼쪽 */}
      <div>
        <div>
          <div>
            <img src="" className="" alt="" />
            <Link></Link>
          </div>
          <div></div>
        </div>
        <div>
          <img src="" className="" alt="" />
        </div>
        <div>
          <div>
            <img src="" className="" alt="" />
            <img src="" className="" alt="" />
            <img src="" className="" alt="" />
          </div>
          <div>
            <img src="" className="" alt="" />
          </div>
        </div>
        <div>
          <img src="" className="" alt="" />
          <Link>aineworld</Link>님 <Link>외 10명</Link>이 좋아합니다
        </div>
        <div>
          <p>
            <Link>canon_mj</Link> 위워크에서 진행한 베이킹 클래스...
            <Link>더보기</Link>
          </p>
          <p>
            <Link>neceosecius</Link> 거봐 좋았잖아~~~~😀
          </p>
          <img src="" className="" alt="" />
          <span>42분 전</span>
        </div>
        <div>
          <p>댓글 달기....</p>
          <p>게시</p>
        </div>
      </div>
      {/* 메인페이지 오른쪽 상단 */}
      <div>
        <botton>
          <div>wecode사진</div>
          <div>
            <p>wecode_bootcamp</p>
            <span>Wecode|위코드</span>
          </div>
        </botton>
      </div>
      {/* 메인페이지 오른쪽 중간 */}
      <div>
        <div>
          <p>스토리</p>
          <Link>모두 보기</Link>
        </div>
        <div>
          <div>
            <img src="" className="" alt="" />
            <Link>
              <p></p>
              <span></span>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p>회원님을 위한 추천</p>
          <Link>모두 보기</Link>
        </div>
        <div>
          <div>
            <img src="" className="" alt="" />
            <Link>
              <p></p>
              <span></span>
            </Link>
            <Link>팔로우</Link>
          </div>
        </div>
      </div>
      {/* 메인페이지 오른쪽 하단 */}
      <div>
        <p>
          Westagram 정보, 지원, 홍보센터, API, 채용 정보, 개인정보처리방침,
          약관, 디렉터리, 프로필, 해시태그, 언어
        </p>
        <p>c 2019 WESTAGRAM</p>
      </div>
    </div>
  );
};

export default Main;
