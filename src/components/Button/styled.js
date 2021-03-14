import styled from "styled-components";

// export const Container = styled.div``;
export const Button = styled.button`
  background: #b6a9e9;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  letter-spacing: 0.005em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  line-height: 30px;
  text-transform: uppercase;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 12px;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    font-size: 18px;
  }
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

/* export const Button = MStyled(MaterialButton)({
  background: " #b6a9e9",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 600,
  letterSpacing: "0.005em",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "4px",
}); */
