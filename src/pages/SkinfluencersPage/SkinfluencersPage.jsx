import { CircularProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { skinfluencerActions } from "../../redux/skinfluencers";
import Skinfluencer from "./components/Skinfluencer";
import * as S from "./styled";

const SkinfluencersPage = () => {
  const dispatch = useDispatch();

  const { skinfluencers, getSkinfluencersError, loading } = useSelector(
    (state) => state.skinfluencers
  );

  useEffect(() => {
    dispatch(skinfluencerActions.getSkinfluencers());
    // eslint-disable-next-line
  }, []);

  return (
    <S.Container>
      <S.SidebarWrapper>
        <S.PageTitle>Skinfluencer tips</S.PageTitle>
        <S.Sidebar>
          <h2>What’s a skinfluencer?</h2>
          <p>
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam
            condimentum tempus diam, ultricies sollicitudin erat facilisis eget.
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam
            condimentum tempus diam, ultricies sollicitudin erat facilisis eget.{" "}
          </p>
        </S.Sidebar>
      </S.SidebarWrapper>
      <div>
        {loading && <CircularProgress />}
        <S.List>
          {skinfluencers &&
            !loading &&
            skinfluencers.map((skinfluencer) => (
              <Skinfluencer
                key={skinfluencer._id}
                skinfluencer={skinfluencer}
              />
            ))}
        </S.List>
        {getSkinfluencersError && <span>{getSkinfluencersError}</span>}
      </div>
    </S.Container>
  );
};

export default SkinfluencersPage;
