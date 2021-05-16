import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import * as S from "./styled";
import * as api from "../../api";

const HomePage = () => {
  const [mostPopularThread, setMostPopularThread] = useState();

  const getMostPopularThread = async () => {
    try {
      const {
        data: { mostPopularThread },
      } = await api.getMostPopularThread();
      setMostPopularThread(mostPopularThread);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMostPopularThread();
  }, []);

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
          {mostPopularThread && (
            <>
              <S.ThreadTitle>{mostPopularThread.title}</S.ThreadTitle>
              <p>{mostPopularThread.body.slice(0, 400)}...</p>
              <Button
                title="Read more"
                link={`/forum/thread/${mostPopularThread._id}`}
                linkStyles={{ flexGrow: 0 }}
              />
            </>
          )}
        </S.Latest>
      </S.MainContent>
    </S.Container>
  );
};

export default HomePage;
