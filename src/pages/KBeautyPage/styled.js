import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "nav-item-active";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 50px;
`;
export const Sidebar = styled.div`
  background-color: pink;
`;

export const BrandLink = styled(NavLink).attrs({ activeClassName })`
  color: #b572f4;
  text-decoration: none;

  &.${activeClassName} {
    font-weight: bold;
    /* text-decoration: underline; */
  }
`;

export const MainContent = styled.div`
  ${({ theme }) => theme.cardStyle}
  padding: 20px;
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
`;
