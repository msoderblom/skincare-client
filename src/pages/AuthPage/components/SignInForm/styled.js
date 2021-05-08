import styled from "styled-components";

export const Container = styled.div``;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  grid-template-rows: auto auto auto;
  row-gap: 25px;

  .input {
    grid-column: 1 /3;
  }

  .submit-btn {
    grid-column: 2/3;
  }
  @media (min-width: ${({ theme }) => theme.tablet}) {
    grid-template-columns: 1fr 0.4fr;
    row-gap: 40px;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    grid-template-columns: 1fr auto;
  }
`;

export const Title = styled.h3`
  font-family: "Playfair Display";
  font-weight: 900;
  font-size: 25px;
  margin: 0 0 15px 0;
  color: #e5bbcc;
  @media (min-width: ${({ theme }) => theme.tablet}) {
    font-size: 30px;
  }
`;
