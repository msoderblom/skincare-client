import React from "react";
import Button from "../../components/Button";
import * as S from "./styled";

const HomePage = () => {
  return (
    <S.Container>
      <S.MainContent>
        <S.Info>
          <S.Title>Welcome</S.Title>
          <p>
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam
            condimentum tempus diam, ultricies sollicitudin erat facilisis eget.
            Vestibulum rhoncus dui vel eros laoreet consectetur. Vivamus eget
            elementum ligula,
          </p>
        </S.Info>
        <S.Join>
          <S.Title>Join our community</S.Title>
          <p>
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam
            condimentum tempus diam, ultricies sollicitudin erat facilisis eget.
          </p>
          <Button
            title="Sign In / Sign Up"
            link="/auth"
            linkStyles={{ flexGrow: 0 }}
          />
        </S.Join>
        <S.Latest>
          <S.Title>Check out the most popular thread</S.Title>
          <p>
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam
            condimentum tempus diam, ultricies sollicitudin erat facilisis eget.
          </p>
        </S.Latest>
      </S.MainContent>
    </S.Container>
  );
};

export default HomePage;
