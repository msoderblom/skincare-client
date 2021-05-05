import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px 10px;
  @media (min-width: ${({ theme }) => theme.tablet}) {
    padding: 15px 30px;
  }
`;

export const PostList = styled.ul`
  /* grid-row: 2 / 3; */
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;
  list-style: none;
  padding: 0;

  margin: 0;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    gap: 40px;
  }
`;
