import React, { useState } from "react";
import * as S from "./styled";
import { HiHeart } from "react-icons/hi";
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
    console.log("data", data);

    dispatch(commentActions.replyToComment(data, comment, socket));
    reset();
    setShowReplyBox(false);
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
        <S.Likes>
          <HiHeart size="1.2em" />
          <span>{comment.likes.length}</span>
        </S.Likes>
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
