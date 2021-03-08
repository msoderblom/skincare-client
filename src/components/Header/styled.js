import styled from "styled-components";

export const Container = styled.header`
  display: grid;
  grid-template-columns: 0.5fr 3fr 1fr;
  grid-template-rows: auto;
  gap: 6px;
  align-items: center;
  z-index: 1;
  position: fixed;
  background-color: #b681fc;
  width: 100%;
  height: 60px;
  padding-inline: 10px;
  -webkit-box-shadow: -1px 1px 11px 2px rgba(0, 0, 0, 0.49);
  box-shadow: -1px 1px 11px 2px rgba(0, 0, 0, 0.49);
`;
