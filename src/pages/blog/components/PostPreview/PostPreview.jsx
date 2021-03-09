import { Paper } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";

const PostPreview = ({ post }) => {
  return (
    <S.Container>
      <Paper>
        <Link to={`/blog/post/${post._id}`}>
          <h3>{post.title}</h3>
        </Link>
        <span>Posted by: {post?.author}</span>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </Paper>
    </S.Container>
  );
};

export default PostPreview;
