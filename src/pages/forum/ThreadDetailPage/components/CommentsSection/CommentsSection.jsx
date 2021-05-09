import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  commentActions,
  commentTypes,
} from "../../../../../redux/forum/comments";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./styled";
import io from "socket.io-client";
import createCommentSchema from "../../../../../validation/createCommentSchema";
import Button from "../../../../../components/Button";
import { HiHeart } from "react-icons/hi";
import Comment from "../../../../../components/Comment";

let socket;
const CommentsSection = ({ threadID }) => {
  const ENDPOINT = process.env.REACT_APP_SOCKET_ENDPOINT;
  const dispatch = useDispatch();

  const { comments, getCommentsError, createCommentError } = useSelector(
    (state) => state.forum.comments
  );
  const { user } = useSelector((state) => state.user);

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(createCommentSchema),
  });

  useEffect(() => {
    dispatch(commentActions.getComments(threadID));
    socket = io(ENDPOINT, {
      transport: ["websocket", "polling"],
    });

    socket.emit("join-comments-section", threadID);

    return () => {
      //  turn off socket if user leaves the comments section
      socket.off();
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log("Inside useEffect with socket.on");
    console.log("listen on new-comment");
    socket.on("new-comment", (comment) => {
      // dispatch(commentActions.getComments(threadID));
      dispatch({ type: commentTypes.UPDATE_COMMENTS, payload: comment });
    });
    // eslint-disable-next-line
  }, []);

  const handleSendComment = (data) => {
    dispatch(commentActions.createComment(data, threadID, socket));
    reset();
  };

  return (
    <S.Container>
      {user ? (
        <S.CommentBox onSubmit={handleSubmit(handleSendComment)}>
          <h3>Leave a comment</h3>

          <S.CommentField
            name="content"
            label="Your comment"
            multiline
            variant="outlined"
            register={register}
            helperText={errors.content?.message}
            errors={errors.content}
          />

          <Button type="submit" title="Comment" />
          {createCommentError && <span>{createCommentError}</span>}
        </S.CommentBox>
      ) : (
        <S.NotSignedInContainer>
          <span>Sign in to leave a comment</span>
          <Button link="/auth" title="Sign In / Sign Up" />
        </S.NotSignedInContainer>
      )}
      <S.Title>Comments</S.Title>
      {comments.length > 0 && (
        <S.CommentsList>
          {[...comments]
            .filter((comment) => comment.level === 1)
            .reverse()
            .map((comment) => {
              const children = comment.children;
              return (
                <S.CommentGroup key={comment._id}>
                  <Comment comment={comment} />
                  {children.length > 0 && (
                    <div>
                      <ul>
                        {children.map((commentL2ID) => {
                          const commentL2 = comments.find(
                            (comment) => comment._id === commentL2ID
                          );

                          return (
                            <li key={commentL2._id}>
                              <Comment comment={commentL2} />
                              {commentL2.children.length > 0 && (
                                <div>
                                  <ul>
                                    {commentL2.children.map((commentL3ID) => {
                                      const commentL3 = comments.find(
                                        (comment) => comment._id === commentL3ID
                                      );
                                      return (
                                        <li key={commentL3._id}>
                                          {" "}
                                          <Comment comment={commentL3} />
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </S.CommentGroup>
              );
            })}
        </S.CommentsList>
      )}

      {getCommentsError && <span>{getCommentsError}</span>}
    </S.Container>
  );
};

export default CommentsSection;
