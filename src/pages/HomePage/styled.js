import styled, { css } from "styled-components";
import bgImage from "../../assets/images/tirza-van-dijk-dq0x8AvNKv8-unsplash.jpg";
import bgImagePortrait from "../../assets/images/tirza-van-dijk-dq0x8AvNKv8-unsplash_portrait.jpg";

const glassStyles = css`
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 4px;
  padding: 20px;
  @supports (backdrop-filter: blur(13px)) {
    background-color: rgba(255, 255, 255, 0.17);
    /* background-color: rgba(255, 255, 255, 0.3); */
    backdrop-filter: blur(13px);
    /* backdrop-filter: blur(20px); */
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    padding: 20px 60px;
  }
`;

export const Container = styled.div`
  margin-top: -80px;
  background-image: url(${bgImagePortrait});
  background-attachment: fixed;
  /* height: 100vh; */
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: ${({ theme }) => theme.tablet}) {
    margin-top: -100px;
    height: 100vh;
    background-attachment: unset;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    background-image: url(${bgImage});
  }
`;
export const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  gap: 20px;
  width: 90%;
  padding: 100px 0 50px 0;

  p {
    padding: 5px 0;
    text-align: center;
    font-family: "IBM Plex Sans", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    color: white;
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    padding: unset;
    height: 75%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 30px;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    height: 70%;
    margin-top: 2%;
    height: 70%;
    /* width: 100%; */
    max-width: 1200px;
  }
`;

export const Info = styled.div`
  ${glassStyles}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    grid-column: 1/2;
    grid-row: 1/2;
  }
`;
export const Join = styled.div`
  ${glassStyles}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    grid-column: 2/3;
    grid-row: 1/2;
  }
`;
export const Latest = styled.div`
  ${glassStyles}

  display: grid;

  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto auto auto;
  h3 {
    grid-column: 1/3;
    text-align: left;
  }
  p {
    text-align: left;
    grid-column: 1/3;
    margin: 0;
  }
  a {
    grid-row: 4/5;
    grid-column: 2/3;
  }
  @media (min-width: ${({ theme }) => theme.tablet}) {
    grid-column: 1/3;
    grid-row: 2/3;
  }
`;

export const Title = styled.h3`
  font-family: "Playfair Display";
  font-weight: 900;
  font-size: 25px;
  margin: 0;
  color: white;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    font-size: 30px;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    font-size: 35px;
  }
`;

export const ThreadTitle = styled.h4`
  font-family: "Playfair Display";
  font-weight: 900;
  font-size: 20px;
  margin: 5px 0 0 0;
  color: #b6a9e9;
  @media (min-width: ${({ theme }) => theme.tablet}) {
    font-size: 30px;
  }
`;
