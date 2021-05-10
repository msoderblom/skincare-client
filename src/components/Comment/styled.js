import styled, { css } from "styled-components";
import Moment from "react-moment";

export const Container = styled.div``;

export const Comment = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-template-rows: auto auto auto auto;
  column-gap: 10px;
  row-gap: 8px;
  padding-bottom: 15px;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    column-gap: 20px;
  }
`;

const avatarLevel2 = css`
  width: 30px;
  height: 30px;
`;

export const Avatar = styled.div`
  border-radius: 50%;
  background: #c4c4c4;
  width: 40px;
  height: 40px;

  grid-column: 1/2;
  grid-row: 1/3;

  ${({ level }) => level > 1 && avatarLevel2}
`;

export const Info = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
  font-family: "Poppins", sans-serif;
  font-style: normal;
  grid-column: 2/3;
  grid-row: 1/2;
`;

export const Username = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1;
  margin-right: 10px;
`;

export const Created = styled(Moment)`
  font-weight: 400;
  font-size: 13px;
  color: #aaaaaa;

  line-height: 1;
`;

export const Content = styled.p`
  font-family: "IBM Plex Sans", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.7);
  margin: 0;
  grid-column: 2/4;
  grid-row: 2/3;
`;

export const Footer = styled.div`
  grid-column: 2/3;
  grid-row: 3/4;
  display: flex;
`;

export const Likes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
  margin-right: 15px;

  span {
    margin-top: 1.5px;
    margin-left: 2px;
  }
`;

export const ReplyBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: "IBM Plex Sans";
  font-size: 15px;
  color: #9582df;
  padding: 5px;

  &:hover {
    color: #b6a9e9;
  }
`;

export const ReplyBox = styled.div`
  grid-column: 1/4;
  grid-row: 4/5;
`;

export const ReplyForm = styled.form`
  display: grid;

  grid-template-columns: 1fr;
  row-gap: 10px;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    grid-template-columns: 1fr auto;
    column-gap: 10px;
  }
`;
