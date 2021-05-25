import React, { useState } from "react";
import * as S from "./styled";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import Button from "../Button";
import createCommentSchema from "../../validation/createCommentSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Input from "../Input";
import { commentActions } from "../../redux/forum/comments";

const Comment = ({ comment, socket }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { replyToCommentError } = useSelector((state) => state.forum.comments);

  const [showReplyBox, setShowReplyBox] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(createCommentSchema),
  });

  const handleReplyToComment = (data) => {
    dispatch(commentActions.replyToComment(data, comment, socket));
    reset();
    setShowReplyBox(false);
  };

  const handleLikeComment = () => {
    if (!user) return;
    dispatch(commentActions.likeComment(comment._id));
  };

  const Likes = () => {
    if (comment.likes.length > 0) {
      // checks if the logged in user likes this comment
      if (comment.likes.find((like) => like === user?._id)) {
        return (
          <S.Likes onClick={handleLikeComment}>
            <HiHeart size="1.2em" />
            <span>&nbsp;{comment.likes.length}</span>
          </S.Likes>
        );
      }
    }
    return (
      <S.Likes onClick={handleLikeComment}>
        <HiOutlineHeart size="1.2em" />
        <span>&nbsp;{comment.likes.length}</span>
      </S.Likes>
    );
  };

  return (
    <S.Comment>
      <S.Avatar level={comment.level} />
      <S.Info>
        <S.Username>{comment.author?.username}</S.Username>
        <S.Created fromNow>{comment.createdAt}</S.Created>
      </S.Info>
      <S.Content>{comment.content}</S.Content>
      <S.Footer>
        {comment.likes && <Likes />}
        {user && comment.level < 3 && (
          <S.ReplyBtn onClick={() => setShowReplyBox((prev) => !prev)}>
            {showReplyBox ? "Cancel" : "Reply"}
          </S.ReplyBtn>
        )}
      </S.Footer>
      {showReplyBox && (
        <S.ReplyBox>
          <S.ReplyForm onSubmit={handleSubmit(handleReplyToComment)}>
            <Input
              name="content"
              label={`Reply to ${comment.author.username}`}
              multiline
              variant="outlined"
              register={register}
              helperText={errors.content?.message}
              errors={errors.content}
            />
            <Button type="submit" title="Reply" />
            {replyToCommentError && <span>{replyToCommentError}</span>}
          </S.ReplyForm>
        </S.ReplyBox>
      )}
    </S.Comment>
  );
};

export default Comment;
