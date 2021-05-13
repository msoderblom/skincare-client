import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { FaComment } from "react-icons/fa";
import "moment-timezone";
import { useDispatch, useSelector } from "react-redux";
import { threadActions } from "../../../../redux/forum/threads";

const ThreadPreview = ({ thread }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [threadLikes, setThreadLikes] = useState(thread.likes);

  const handleLikeThread = () => {
    if (!user) return;
    dispatch(threadActions.likeThread(thread._id));

    if (threadLikes.find((like) => like === user?._id)) {
      setThreadLikes((prev) => prev.filter((id) => id !== user._id));
    } else {
      setThreadLikes((prev) => [...prev, user._id]);
    }
  };

  const Likes = () => {
    if (threadLikes.length > 0) {
      // checks if the logged in user likes this post
      if (threadLikes.find((like) => like === user?._id)) {
        return (
          <S.Likes onClick={handleLikeThread}>
            <HiHeart size="1.2em" />
            <span>&nbsp;{threadLikes.length}</span>
          </S.Likes>
        );
      }
    }
    return (
      <S.Likes onClick={handleLikeThread}>
        <HiOutlineHeart size="1.2em" />
        <span>&nbsp;{threadLikes.length}</span>
      </S.Likes>
    );
  };

  return (
    <S.Container>
      <Link
        to={`/forum/thread/${thread._id}`}
        style={{ textDecoration: "none" }}
      >
        <S.Title>{thread.title}</S.Title>
      </Link>
      <S.Body>
        {thread.body.length > 99
          ? thread.body.slice(0, 99) + "..."
          : thread.body}
      </S.Body>
      <S.Footer>
        <S.AuthorDetails>
          <S.Avatar />
          <S.Username>
            {thread.author?.username}
            <S.Created fromNow>{thread.createdAt}</S.Created>
          </S.Username>
        </S.AuthorDetails>
        <Likes />
        <S.Comments>
          <FaComment size="1em" />
          <span>&nbsp;{thread.commentsCount}</span>
        </S.Comments>
      </S.Footer>
    </S.Container>
  );
};

export default ThreadPreview;
