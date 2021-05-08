import { NavLink as NavigationLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "burger-nav-item-active";

export const Menu = styled.div`
  background-color: #e5bbcc;
  width: 80%;
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr auto;
  /* background: ${({ theme }) => theme.primaryLight}; */
  height: 100vh;
  text-align: left;
  /* padding: 2rem; */
  padding: 90px 2rem 2rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};

  .sign-out-btn {
    grid-column: 2 /3;
    /* align-self: flex-end; */
    /* flex-grow: 0; */
  }

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
  grid-column: 1 /3;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NavLink = styled(NavigationLink).attrs({ activeClassName })`
  color: ${({ theme }) => theme.lavender};
  text-decoration: none;
  text-transform: uppercase;
  font-size: 22px;
  line-height: 1.7;
  font-family: "Poppins", sans-serif;
  /* font-family: "IBM Plex Sans", sans-serif; */
  font-weight: bold;

  &.${activeClassName} {
    /* font-weight: bold; */
    color: #9582df;

    /* text-decoration: underline; */
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    font-size: 40px;
  }
`;
