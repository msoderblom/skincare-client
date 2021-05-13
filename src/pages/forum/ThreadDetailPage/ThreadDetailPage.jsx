import { CircularProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { threadActions, threadTypes } from "../../../redux/forum/threads";
import CommentsSection from "./components/CommentsSection/CommentsSection";
import * as S from "./styled";

const ThreadDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    viewedThread: thread,
    threads,
    getOneThreadError,
    loading,
  } = useSelector((state) => state.forum.threads);

  const { user } = useSelector((state) => state.user);

  const handleLikeThread = () => {
    if (!user) return;
    dispatch(threadActions.likeThread(thread._id));
  };

  const Likes = () => {
    if (thread.likes.length > 0) {
      // checks if the logged in user likes this post
      if (thread.likes.find((like) => like === user?._id)) {
        return (
          <S.Likes onClick={handleLikeThread}>
            <HiHeart size="1.2em" />
            <span>&nbsp;{thread.likes.length}</span>
          </S.Likes>
        );
      }
    }
    return (
      <S.Likes onClick={handleLikeThread}>
        <HiOutlineHeart size="1.2em" />
        <span>&nbsp;{thread.likes.length}</span>
      </S.Likes>
    );
  };

  useEffect(() => {
    const threadFromRedux = threads.find((thread) => thread._id === id);

    if (threadFromRedux) {
      console.log("Getting thread from redux");
      dispatch({
        type: threadTypes.GET_ONE_THREAD_SUCCESS,
        payload: { ...threadFromRedux },
      });
    } else {
      console.log("Getting thread from api");
      dispatch(threadActions.getOneThread(id));
    }
  }, [dispatch, id, threads]);

  return (
    <S.Container>
      {loading && <CircularProgress />}
      {thread && (
        <S.ThreadContent>
          <S.Header>
            <S.AuthorDetails>
              <S.Info>
                <S.Username>{thread.author?.username}</S.Username>
                <S.Created fromNow>{thread.createdAt}</S.Created>
              </S.Info>
              <S.Avatar />
            </S.AuthorDetails>
            <S.Title>{thread.title}</S.Title>
          </S.Header>
          <S.Body>{thread.body}</S.Body>
          <Likes />
        </S.ThreadContent>
      )}

      {getOneThreadError && <span>{getOneThreadError}</span>}

      <CommentsSection threadID={id} />
    </S.Container>
  );
};

export default ThreadDetailPage;
