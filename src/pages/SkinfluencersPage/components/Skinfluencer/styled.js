import styled from "styled-components";

export const Container = styled.li`
  padding: 10px 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  background-color: white;
  display: grid;
  grid-template-rows: auto auto auto auto;
  grid-template-columns: 1fr;
  /* row-gap: 10px; */

  @media (min-width: ${({ theme }) => theme.tablet}) {
    grid-template-rows: auto auto auto;
    grid-template-columns: 50% 50%;
  }
`;

export const Name = styled.h3`
  grid-column: 1/2;
  grid-row: 1/2;
  margin: 0;
  font-family: "Playfair Display";
  font-weight: 900;
  font-size: 30px;
  /* margin: 15px 0 0 0; */
  color: #e5bbcc;
  line-height: 1;
`;
export const Title = styled.p`
  grid-column: 1/2;
  grid-row: 2/3;
  font-family: "IBM Plex Sans", sans-serif;
  margin: 0;
  font-weight: 400;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.6);
  line-height: 1;
`;
export const About = styled.p`
  grid-column: 1/2;
  grid-row: 3/4;

  font-family: "IBM Plex Sans", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.7);
`;
export const SocialLinkList = styled.ul`
  padding: 0;
  list-style: none;

  grid-row: 4/5;
  display: grid;
  grid-template-columns: auto auto;
  align-items: start;
  gap: 5px;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    grid-column: 2/3;
    grid-row: 1/4;
  }
`;

export const SocialLink = styled.li`
  display: flex;
  align-items: center;

  a {
    font-family: "Poppins", sans-serif;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.7);
    margin-left: 10px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
