import styled from "styled-components";
import DefaultNav from "../NavBar";
// import NavBar from "../NavBar/NavBar";

export const Container = styled.header`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto;
  gap: 6px;
  align-items: center;
  z-index: 10;
  position: fixed;
  background-color: white;
  width: 100%;
  height: 80px;
  padding: 0 10px;
  /* -webkit-box-shadow: -1px 1px 11px 2px rgba(0, 0, 0, 0.49);
  box-shadow: -1px 1px 11px 2px rgba(0, 0, 0, 0.49); */

  /* box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%); */
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);

  #burgerBtn {
    margin-right: 15px;
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    /* background: blue; */
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    /* background: green; */
    grid-template-columns: 200px 1fr auto;
    gap: 6px;
    #burgerBtn {
      display: none;
    }
  }
`;

export const SiteTitle = styled.h1`
  font-size: 20px;
  font-family: "Playfair Display";
  font-weight: 900;
  /* margin: 0 0 15px 0; */
  color: #e5bbcc;
  @media (min-width: ${({ theme }) => theme.tablet}) {
    font-size: 25px;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    font-size: 30px;
    margin-left: 10px;
  }
`;
export const NavBar = styled(DefaultNav)`
  grid-column: 2 / 3;
  /* margin-right: 10%; */
  width: 500px;
  display: none;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    display: flex;
  }
`;
export const UserAuth = styled.div`
  grid-column: 3 / 4;
`;
