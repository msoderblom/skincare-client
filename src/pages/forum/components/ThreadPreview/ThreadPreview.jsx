import { Paper } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";
import { HiOutlineThumbUp } from "react-icons/hi";

const ThreadPreview = ({ thread }) => {
  return (
    <S.Container>
      <Link
        to={`/forum/thread/${thread._id}`}
        style={{ textDecoration: "none" }}
      >
        <S.Tilte>{thread.title}</S.Tilte>
      </Link>
      <S.Body>{thread.body}</S.Body>
      <S.Footer>
        <S.AuthorDetails>
          <S.Avatar />
          <S.Username>{thread.author?.username}</S.Username>
        </S.AuthorDetails>
        <div>
          <HiOutlineThumbUp />
          <span>{thread.likes.length}</span>
        </div>
      </S.Footer>
    </S.Container>
  );
};

export default ThreadPreview;
