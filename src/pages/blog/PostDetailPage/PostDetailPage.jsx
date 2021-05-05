import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postActions, postTypes } from "../../../redux/blog/posts";
import { useParams } from "react-router-dom";
import * as S from "./styled";
import { CircularProgress } from "@material-ui/core";

const PostDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { viewedPost: post, posts, getOnePostError, loading } = useSelector(
    (state) => state.blog.posts
  );

  useEffect(() => {
    const postFromRedux = posts.find((post) => post._id === id);

    if (postFromRedux) {
      console.log("Getting post from redux");
      dispatch({
        type: postTypes.GET_ONE_POST_SUCCESS,
        payload: { ...postFromRedux },
      });
    } else {
      console.log("Getting post from api");
      dispatch(postActions.getOnePost(id));
    }
  }, [dispatch, id, posts]);

  return (
    <S.Container>
      {loading && <CircularProgress />}
      {post && (
        <S.PostWrapper>
          <S.Title>{post.title}</S.Title>
          <S.AuthorDetails>
            <S.Author>Posted by: {post?.author}</S.Author>
            <S.Created fromNow>{post.createdAt}</S.Created>
          </S.AuthorDetails>
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </S.PostWrapper>
      )}
      {getOnePostError && <span>{getOnePostError}</span>}
    </S.Container>
  );
};

export default PostDetailPage;
