import React from "react";
import Button from "../../components/Button";
import * as S from "./styled";

const HomePage = () => {
  return (
    <S.Container>
      <S.MainContent>
        <S.Info>
          <p>HomePage</p>
        </S.Info>
        <S.Join>
          <S.Title>Join our community</S.Title>
          <p>
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam
            condimentum tempus diam, ultricies sollicitudin erat facilisis eget.{" "}
          </p>
          <Button title="Sign In / Sign Up" />
        </S.Join>
        <S.Latest>
          <h1>Latest Blog Post</h1>
        </S.Latest>
      </S.MainContent>
    </S.Container>
  );
};

export default HomePage;
