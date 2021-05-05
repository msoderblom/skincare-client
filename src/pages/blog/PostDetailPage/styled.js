import styled from "styled-components";
import Moment from "react-moment";

export const Container = styled.div`
  padding: 40px 10px 0 10px;
  display: flex;
  justify-content: center;
  @media (min-width: ${({ theme }) => theme.tablet}) {
    padding: 40px 20px 0 20px;
  }
`;
export const PostWrapper = styled.div`
  ${({ theme }) => theme.cardStyle}
  padding: 50px 20px 20px 20px;
  max-width: 1200px;
  flex-grow: 1;
  position: relative;
  @media (min-width: ${({ theme }) => theme.tablet}) {
    padding: 80px;
  }
`;

export const Title = styled.h1`
  font-family: "Playfair Display";
  font-weight: 900;
  font-size: 25px;
  margin: 0 0 15px 0;
  color: #e5bbcc;
  @media (min-width: ${({ theme }) => theme.tablet}) {
    font-size: 48px;
  }
`;

export const AuthorDetails = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.tablet}) {
    top: 30px;
    right: 30px;
  }
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
