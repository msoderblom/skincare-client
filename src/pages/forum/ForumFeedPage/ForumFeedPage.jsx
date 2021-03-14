import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { threadActions } from "../../../redux/forum/threads";
import Pagination from "@material-ui/lab/Pagination";
import * as S from "./styled";
import { useHistory, useLocation } from "react-router-dom";
import ThreadPreview from "../components/ThreadPreview/ThreadPreview";
import Button from "../../../components/Button/Button";

const ForumFeedPage = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const urlParams = new URLSearchParams(location.search);
  const pageNumber = Number(urlParams.get("page")) || 1;
  const [page, setPage] = useState(pageNumber);

  const { threads, getThreadsError, totalPages, loading } = useSelector(
    (state) => state.forum.threads
  );
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(threadActions.getThreads(`?page=${page}&limit=3`));
  }, [page, dispatch, location]);

  const handlePageChange = (event, value) => {
    setPage(value);
    history.replace({ pathname: "/forum", search: `?page=${value}` });
  };

  return (
    <S.Container>
      <S.SideBar>
        {user ? (
          <Button title="create new thread" link="/forum/create-thread" />
        ) : (
          <div>
            <span>Sign in to create a thread</span>
            <Button title="Sign In / Sign Up" link="/auth" />
          </div>
        )}
      </S.SideBar>
      {loading && <CircularProgress />}
      {threads.length > 0 && !loading && (
        <S.ThreadsContainer>
          {totalPages > 1 && (
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
            />
          )}
          <S.ThreadList>
            {threads.map((thread) => (
              <li key={thread._id}>
                <ThreadPreview thread={thread} />
              </li>
            ))}
          </S.ThreadList>
        </S.ThreadsContainer>
      )}

      {getThreadsError && <span>{getThreadsError}</span>}
    </S.Container>
  );
};

export default ForumFeedPage;
