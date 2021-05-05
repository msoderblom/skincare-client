import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";

const PostPreview = ({ post }) => {
  return (
    <S.Container>
      <Link to={`/blog/post/${post._id}`} style={{ textDecoration: "none" }}>
        <S.Title>{post.title}</S.Title>
      </Link>
      <S.AuthorDetails>
        <S.Author>Posted by: {post?.author}</S.Author>
        <S.Created fromNow>{post.createdAt}</S.Created>
      </S.AuthorDetails>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </S.Container>
  );
};

export default PostPreview;
