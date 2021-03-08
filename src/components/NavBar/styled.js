import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const activeClassName = "nav-item-active";

export const Nav = styled.nav`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const NavLink = styled(Link).attrs({ activeClassName })`
  color: white;
  text-decoration: none;
  text-transform: uppercase;

  &.${activeClassName} {
    font-weight: bold;
    text-decoration: underline;
  }
`;
