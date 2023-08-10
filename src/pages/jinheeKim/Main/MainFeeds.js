import React, { useState, useEffect } from "react";
import "./Main.scss";
import userimg from "../assets/images/test.jpg";
import feedimg from "../assets/images/test.jpg";
import heart_click from "../assets/icon/heart_click.png";
import share from "../assets/icon/share.png";
import bookmark from "../assets/icon/bookmark-white.png";
import chat from "../assets/icon/chat.png";
import follower from "../assets/images/bf.jpg";

const MainFeeds = () => {
  const [commentValue, setCommentValue] = useState("");
  const saveComment = (event) => {
    setCommentValue(event.target.value);
  };

  const [comments, setComments] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    if (commentValue === "") {
      alert("빈 칸입니다.");
      return;
    }
    setComments((commentList) => [...commentList, commentValue]);
    setCommentValue("");
  };

  const [feedsData, setFeedsData] = useState([]);
  useEffect(() => {
    fetch("/data/feedsData.json", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFeedsData(data);
      });
  }, []);

  return (
    <article className="feeds">
      {feedsData.map((feed) => {
        return (
          <>
            <div className="feedsTop">
              <div className="photo">
                <img src={feed.userProfile} alt="."></img>
              </div>
              <div className="name">
                <p className="username">{feed.username}</p>
                <p className="location">제주도</p>
              </div>
            </div>
            <div className="feedImg">
              <img src={feed.feedImages} alt="."></img>
            </div>
            <div className="feedsBottom">
              <div className="feedsBottomIcons">
                <div className="bottomLeft">
                  <img className="navIcon" alt="." src={heart_click} />
                  <img className="navIcon" alt="." src={chat} />
                  <img className="navIcon" alt="." src={share} />
                </div>
                <div className="bottomRight">
                  <img className="navIcon" alt="." src={bookmark} />
                </div>
              </div>
              <div className="like">
                <div className="photo">
                  <img src={follower} alt="." />
                </div>{" "}
                <span className="username">ㅌㅌ</span>님 외
                <span className="bold">&nbsp;0명</span>이 좋아합니다.
              </div>
              <div className="description">
                <p>
                  <span className="username">{feed.username}</span>
                  {feed.content}
                </p>
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
                  <button type="submit" className="commentButton">
                    게시
                  </button>
                </div>
              </form>
            </div>
          </>
        );
      })}
    </article>
  );
};

export default MainFeeds;
