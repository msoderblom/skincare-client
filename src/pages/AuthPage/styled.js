import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 100%;
  padding: 0 15px;
  @media (min-width: ${({ theme }) => theme.tablet}) {
    padding: 0 25px;
  }
`;
export const FormWrapper = styled.div`
  ${({ theme }) => theme.cardStyle}
  padding: 20px 15px;
  flex: 1;
  max-width: 850px;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    padding: 30px;
  }
`;

export const GoToSignUp = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: "IBM Plex Sans";
  font-size: 18px;
  color: #9582df;
  padding: 5px;
  margin-top: 10px;
  width: 100%;

  &:hover {
    color: #b6a9e9;
  }
  @media (min-width: 600px) {
    width: unset;
  }
`;
export const GoToSignIn = styled(GoToSignUp)``;
