import { CircularProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import { HiHeart } from "react-icons/hi";
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
          <S.AuthorDetails>
            <S.Info>
              <S.Username>{thread.author?.username}</S.Username>
              <S.Created fromNow>{thread.createdAt}</S.Created>
            </S.Info>
            <S.Avatar />
          </S.AuthorDetails>
          <S.Tilte>{thread.title}</S.Tilte>
          <S.Body>{thread.body}</S.Body>
          <S.Likes>
            <HiHeart size="1.2em" />
            <span>{thread.likes.length}</span>
          </S.Likes>
        </S.ThreadContent>
      )}

      {getOneThreadError && <span>{getOneThreadError}</span>}

      <CommentsSection threadID={id} />
    </S.Container>
  );
};

export default ThreadDetailPage;
