import React from "react";
import * as S from "./styled";
import { HiHeart } from "react-icons/hi";

const Comment = ({ comment }) => {
  return (
    <S.Comment>
      <S.Avatar />
      <S.Info>
        <S.Username>{comment.author?.username}</S.Username>
        <S.Created fromNow>{comment.createdAt}</S.Created>
      </S.Info>
      <S.Content>{comment.content}</S.Content>
      <S.Likes>
        <HiHeart size="1.2em" />
        <span>{comment.likes.length}</span>
      </S.Likes>
    </S.Comment>
  );
};

export default Comment;
