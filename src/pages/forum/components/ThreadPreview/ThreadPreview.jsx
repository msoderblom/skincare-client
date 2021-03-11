import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";
import {
  /*  HiOutlineThumbUp, HiOutlineHeart, */ HiHeart,
} from "react-icons/hi";
import { FaComment } from "react-icons/fa";

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

        <S.Likes>
          <HiHeart size="1.2em" />
          <span>{thread.likes.length}</span>
        </S.Likes>
        <S.Comments>
          <FaComment size="1em" />
          <span>{thread.commentsCount}</span>
        </S.Comments>
      </S.Footer>
    </S.Container>
  );
};

export default ThreadPreview;
