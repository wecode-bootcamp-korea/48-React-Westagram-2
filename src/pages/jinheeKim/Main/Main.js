import React, {useState} from "react";
import "./Main.scss";
import compass from "../assets/icon/compass.png";
import heart from "../assets/icon/heart.png";
import instagram from "../assets/icon/instagram.png";
import search from "../assets/icon/search.png";
import user from "../assets/icon/user.png";
import userimg from "../assets/images/test.jpg";
import feedimg from "../assets/images/test.jpg";
import heart_click from "../assets/icon/heart_click.png";
import share from "../assets/icon/share.png";
import bookmark from "../assets/icon/bookmark-white.png";
import chat from "../assets/icon/chat.png";
import follower from "../assets/images/bf.jpg";
import TextareaAutosize from 'react-textarea-autosize';

const INFO_LIST = [
  {id: 1, link: "https://instargram.com", text: "소개"},
  {id: 1, link: "https://instargram.com", text: "소개"},
  {id: 1, link: "https://instargram.com", text: "소개"},
  {id: 1, link: "https://instargram.com", text: "소개"},
  {id: 1, link: "https://instargram.com", text: "소개"},
  {id: 1, link: "https://instargram.com", text: "소개"},
  {id: 1, link: "https://instargram.com", text: "소개"},

];

const Main = () => {
  const [comment, setComment] = useState('');
  const saveComment = (event) => {
    setComment(event.target.value);
  };
  const [commentArray, setCommentArray] = useState([]);

  const onSubmit = event => {
    event.preventDefault();
    if (comment === '') {
      return;
    }
    setCommentArray(commentList => [comment, ...commentList]);
    setComment('');
  };

  return (
    <>
        <nav className="nav">
            <div className="nav-left">
                <img className="nav-icon icon-instagram" alt="." src={instagram}/>
                <span className="logo">Westagram</span>
            </div>
            <div className="search-bar">
              <img className="icon-search" alt="." src={search}/>
              <input className="search-box" type="text" aria-label="검색창" placeholder="검색" />
            </div>
            <div className="nav-right">
              <img className="nav-icon" alt="." src={compass}/>
              <img className="nav-icon" alt="." src={heart}/>
              <img className="nav-icon" alt="." src={user}/>
            </div>
        </nav>
        <div className="main">
          <div className="feeds">
            <article>
              <div className="feeds-top">
                <div className="photo">
                  <img src={userimg} alt="."></img>
                </div>
                <div className="name">
                  <p className="username">jini</p>
                  <p className="location">제주도</p>
                </div>
              </div>
              <div className="feed-img">
                  <img src={feedimg} alt="."></img>
              </div>
              <div className="feeds-bottom">
                <div className="feeds-bottom-icons">
                  <div className="bottom-left">
                    <img className="nav-icon" alt="." src={heart_click}/>
                    <img className="nav-icon" alt="." src={chat}/>
                    <img className="nav-icon" alt="." src={share}/>
                  </div>
                  <div className="bottom-right">
                    <img className="nav-icon" alt="." src={bookmark}/>
                  </div>
                </div>
                <div className="like">
                  <div className="photo"><img src={follower} alt="."/></div> <span className="username">ㅌㅌ</span>님 외<span className="bold">&nbsp;0명</span>이 좋아합니다.
                </div>
                <div className="description">
                  <p><span className="username">jini</span> 또 놀러가고 싶다. 취업하고 놀아야지.</p>
                </div>
                <form className="comment" onSubmit={onSubmit}>
                    {commentArray.map((value, user) => (
                        <p key={user} className="comment-list">
                            <span className="username">이름</span> {value}
                        </p>
                    ))}
                    <p className="write-time">42초 전</p>
                    <div className="comment-container">
                        <TextareaAutosize
                            type="text"
                            className="comment-box"
                            placeholder="댓글달기 .."
                            value={comment}
                            onChange={saveComment}
                            cacheMeasurements
                        />
                        <button type="submit" className="comment-button">게시</button>
                    </div>
                </form>
              </div>
            </article>
          </div>
          <div className="main-right">
            <div className="main-right-top">
              <div className="photo">
                <img src={userimg} alt="."></img>
              </div>
              <div className="name">
                <p className="username">jini</p>
                <p className="username2">지니지니</p>
              </div>
            </div>
            <div className="stories">
              <div className="stories-top">
                <p className="story">스토리</p>
                <p>모두 보기</p>
              </div>
              <div className="story-people">
                <div className="photo">
                  <img src={userimg} alt="."></img>
                </div>
                <div className="name">
                  <p className="username">jini</p>
                  <p className="username2">지니지니</p>
                </div>
              </div>
              <div className="story-people">
                <div className="photo">
                  <img src={userimg} alt="."></img>
                </div>
                <div className="name">
                  <p className="username">jini</p>
                  <p className="username2">지니지니</p>
                </div>
              </div>
              <div className="story-people">
                <div className="photo">
                  <img src={userimg} alt="."></img>
                </div>
                <div className="name">
                  <p className="username">jini</p>
                  <p className="username2">지니지니</p>
                </div>
              </div>
              <div className="story-people">
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
              <div className="stories-top">
                <p className="story">회원님을 위한 추천</p>
                <p>모두 보기</p>
              </div>
              <div className="story-people">
                <div className="photo">
                  <img src={userimg} alt="."></img>
                </div>
                <div className="name">
                  <p className="username">jini</p>
                  <p className="username2">지니지니</p>
                </div>
                <button>팔로우</button>
              </div>
              <div className="story-people">
                <div className="photo">
                  <img src={userimg} alt="."></img>
                </div>
                <div className="name">
                  <p className="username">jini</p>
                  <p className="username2">지니지니</p>
                </div>
                <button>팔로우</button>
              </div>
              <div className="story-people">
                <div className="photo">
                  <img src={userimg} alt="."></img>
                </div>
                <div className="name">
                  <p className="username">jini</p>
                  <p className="username2">지니지니</p>
                </div>
                <button>팔로우</button>
              </div>
              <div className="story-people">
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
                  return (<li key={info.id}><a href="{info.link}">{info.text}</a></li>);
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
