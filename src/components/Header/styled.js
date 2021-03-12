import styled from "styled-components";

export const Container = styled.header`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 6px;
  align-items: center;
  z-index: 2;
  position: fixed;
  background-color: white;
  width: 100%;
  height: 80px;
  padding-inline: 10px;
  /* -webkit-box-shadow: -1px 1px 11px 2px rgba(0, 0, 0, 0.49);
  box-shadow: -1px 1px 11px 2px rgba(0, 0, 0, 0.49); */

  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);

  @media (min-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: 0.5fr 3fr 1fr;
    #burgerBtn {
      display: none;
    }
  }
`;
