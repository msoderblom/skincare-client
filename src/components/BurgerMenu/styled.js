import { Link } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "nav-item-active";

export const Menu = styled.div`
  background-color: #e5bbcc;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background: ${({ theme }) => theme.primaryLight}; */
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};

  /*   a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  } */
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const NavLink = styled(Link).attrs({ activeClassName })`
  color: ${({ theme }) => theme.lavender};
  text-decoration: none;
  text-transform: uppercase;
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;

  &.${activeClassName} {
    /* font-weight: bold; */
    color: ${({ theme }) => theme.primaryDark};

    text-decoration: underline;
  }
`;
