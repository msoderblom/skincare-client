import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  @media (min-width: ${({ theme }) => theme.tablet}) {
    column-gap: 30px;
    grid-template-columns: 1fr 2fr;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    column-gap: 75px;
  }
`;
export const SidebarWrapper = styled.div``;

export const PageTitle = styled.h1`
  font-family: "Playfair Display";
  font-weight: 900;
  font-size: 25px;
  margin: 0 0 15px 0;
  color: #e5bbcc;
  @media (min-width: ${({ theme }) => theme.tablet}) {
    font-size: 48px;
  }
`;

export const Sidebar = styled.div`
  ${({ theme }) => theme.cardStyle}
  padding: 15px;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    padding: 20px;
  }
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 30px;
`;
