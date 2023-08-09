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
  const [commentValue, setCommentValue] = useState('');
  const saveComment = (event) => {
    setCommentValue(event.target.value);
  };

  const [comments, setComments] = useState([]);

  const onSubmit = event => {
    event.preventDefault();
    if (commentValue === '') {
      alert('빈 칸입니다.')
      return;
    }
    setComments(commentList => [...commentList, commentValue]);
    setCommentValue('');
  };

  return (
    <>
        <nav className="nav">
            <div className="navLeft">
                <img className="navIcon iconInstagram" alt="." src={instagram}/>
                <span className="logo">Westagram</span>
            </div>
            <div className="searchBar">
              <img className="iconSearch" alt="." src={search}/>
              <input className="searchBox" type="text" aria-label="검색창" placeholder="검색" />
            </div>
            <div className="navRight">
              <img className="navIcon" alt="." src={compass}/>
              <img className="navIcon" alt="." src={heart}/>
              <img className="navIcon" alt="." src={user}/>
            </div>
        </nav>
        <div className="main">
          <div className="feeds">
            <article>
              <div className="feedsTop">
                <div className="photo">
                  <img src={userimg} alt="."></img>
                </div>
                <div className="name">
                  <p className="username">jini</p>
                  <p className="location">제주도</p>
                </div>
              </div>
              <div className="feedImg">
                  <img src={feedimg} alt="."></img>
              </div>
              <div className="feedsBottom">
                <div className="feedsBottomIcons">
                  <div className="bottomLeft">
                    <img className="navIcon" alt="." src={heart_click}/>
                    <img className="navIcon" alt="." src={chat}/>
                    <img className="navIcon" alt="." src={share}/>
                  </div>
                  <div className="bottomRight">
                    <img className="navIcon" alt="." src={bookmark}/>
                  </div>
                </div>
                <div className="like">
                  <div className="photo"><img src={follower} alt="."/></div> <span className="username">ㅌㅌ</span>님 외<span className="bold">&nbsp;0명</span>이 좋아합니다.
                </div>
                <div className="description">
                  <p><span className="username">jini</span> 또 놀러가고 싶다. 취업하고 놀아야지.</p>
                </div>
                <form className="comment" onSubmit={onSubmit}>
                    {comments.map((value, user) => (
                        <p className="commentList">
                            <span className="username">이름</span> {value}
                        </p>
                    ))}
                    <p className="writeTime">42초 전</p>
                    <div className="commentContainer">
                        <textarea
                            type="text"
                            className="commentBox"
                            placeholder="댓글달기 .."
                            value={commentValue}
                            onChange={saveComment}
                        />
                        <button type="submit" className="commentButton">게시</button>
                    </div>
                </form>
              </div>
            </article>
          </div>
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
