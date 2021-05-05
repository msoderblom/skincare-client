import styled from "styled-components";
import Moment from "react-moment";

export const Container = styled.div`
  height: 235px;
  padding: 25px 20px;
  ${({ theme }) => theme.cardStyle}

  @media (min-width: ${({ theme }) => theme.desktop}) {
    padding: 25px 45px;
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

export const AuthorDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Author = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: flex-end;
  line-height: 24px;
`;

export const Created = styled(Moment)`
  font-weight: 400;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.7);
  margin-left: 8px;
  line-height: 23px;
`;
