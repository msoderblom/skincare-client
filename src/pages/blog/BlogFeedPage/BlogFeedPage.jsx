import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postActions } from "../../../redux/blog/posts";
import Pagination from "@material-ui/lab/Pagination";
import * as S from "./styled";
import { CircularProgress } from "@material-ui/core";
import PostPreview from "../components/PostPreview/PostPreview";

const BlogFeedPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const urlParams = new URLSearchParams(location.search);
  const pageNumber = Number(urlParams.get("page")) || 1;
  const [page, setPage] = useState(pageNumber);

  const { posts, getPostsError, totalPages, loading } = useSelector(
    (state) => state.blog.posts
  );

  useEffect(() => {
    dispatch(postActions.getPosts(`?page=${page}`));
  }, [page, dispatch, location]);

  const handlePageChange = (event, value) => {
    setPage(value);
    history.replace({ pathname: "/blog", search: `?page=${value}` });
  };
  return (
    <S.Container>
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
        />
      )}
      {loading && <CircularProgress />}
      {posts.length > 0 && !loading && (
        <S.PostList>
          {posts.map((post) => (
            <li key={post._id}>
              <PostPreview post={post} />
            </li>
          ))}
        </S.PostList>
      )}

      {getPostsError && <span>{getPostsError}</span>}
    </S.Container>
  );
};

export default BlogFeedPage;
