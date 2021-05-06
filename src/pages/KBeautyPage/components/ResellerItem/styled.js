import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => theme.cardStyle}
  padding: 15px;

  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  @media (min-width: ${({ theme }) => theme.tablet}) {
    padding: 25px 45px;
  }
`;

export const Name = styled.h3`
  font-family: "Playfair Display";
  font-weight: 900;
  font-size: 25px;
  margin: 15px 0 0 0;
  color: #e5bbcc;
  line-height: 1;
`;

export const ResellerLink = styled.div`
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.7);
  a {
    text-decoration: none;
    margin-left: 5px;
    font-family: IBM Plex Sans;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.7);
    &:hover {
      text-decoration: underline;
    }
  }
`;
export const Description = styled.p`
  font-family: IBM Plex Sans;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.7);
  grid-column: 1/3;
`;
