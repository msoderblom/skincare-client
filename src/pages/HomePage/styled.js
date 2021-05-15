import styled, { css } from "styled-components";
import bgImage from "../../assets/images/tirza-van-dijk-dq0x8AvNKv8-unsplash.jpg";
import bgImagePortrait from "../../assets/images/tirza-van-dijk-dq0x8AvNKv8-unsplash_portrait.jpg";

const glassStyles = css`
  background-color: rgba(255, 255, 255, 0.15);
  /* background-color: rgba(255, 255, 255, 0.3); */
  backdrop-filter: blur(12px);
  /* backdrop-filter: blur(20px); */
  border-radius: 4px;
  /* ${({ theme }) => theme.cardStyle} */
`;

export const Container = styled.div`
  margin-top: -100px;
  background-image: url(${bgImagePortrait});
  height: 100vh;
  /* overflow: hidden; */
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    background-image: url(${bgImage});
  }
`;
export const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  gap: 20px;
  height: 70%;
  width: 80%;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 40px;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    margin-top: 50px;
    height: 70%;
    width: 70%;
  }
`;

export const Info = styled.div`
  ${glassStyles}

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
  padding: 0 70px;

  p {
    padding: 5px 0;
    text-align: center;
    font-family: "IBM Plex Sans", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    /* color: rgba(0, 0, 0, 0.7); */
    color: white;
  }
  button {
    flex-grow: 0;
    width: fit-content;
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    grid-column: 2/3;
    grid-row: 1/2;
  }
`;
export const Latest = styled.div`
  ${glassStyles}
  /* margin-top: 50px; */
  
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
  /* color: #e5bbcc; */
  color: white;
  /* text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1); */

  /* color: white; */
  @media (min-width: ${({ theme }) => theme.tablet}) {
    font-size: 30px;
  }
`;
