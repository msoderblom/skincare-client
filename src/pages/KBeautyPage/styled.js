import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "nav-item-active";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    grid-template-columns: 1fr 1.5fr;
    /* gap: 50px; */
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    grid-template-columns: 1fr 2fr;
    gap: 50px;
  }
`;
export const Sidebar = styled.div`
  background-color: #fdd3da;
  /* background-color: #e5bbcc; */
  border-radius: 4px;
  padding: 20px;
  height: fit-content;
  @media (min-width: ${({ theme }) => theme.tablet}) {
    padding: 20px;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    padding: 40px;
  }
`;

export const BrandListTitle = styled.h3`
  font-family: "Playfair Display";
  font-weight: 900;
  font-size: 20px;
  margin: 15px 0 0 0;
  /* color: rgba(0, 0, 0, 0.7); */
  color: white;
  line-height: 1;
`;

export const BrandList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const BrandLink = styled(NavLink).attrs({ activeClassName })`
  /* color: #b6a9e9; */
  color: #e38f93;
  text-decoration: none;
  font-size: 18px;

  &.${activeClassName} {
    font-weight: bold;
    /* text-decoration: underline; */
  }
`;

export const MainContent = styled.div`
  ${({ theme }) => theme.cardStyle}
  padding: 20px 20px;

  @media (min-width: ${({ theme }) => theme.desktop}) {
    padding: 40px 95px;
  }
`;
export const BrandInfo = styled.div``;

export const BrandName = styled.h2`
  font-family: "Playfair Display";
  font-weight: 900;
  font-size: 30px;
  margin: 15px 0 0 0;
  color: #e5bbcc;
  line-height: 1;
`;
export const Description = styled.p``;
export const Resellers = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 15px;
`;

export const Title = styled(BrandName)``;
