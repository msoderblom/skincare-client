import styled from "styled-components";
import Moment from "react-moment";

export const Container = styled.div``;
export const CommentsList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 15px;
`;

export const Comment = styled.li`
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-template-rows: auto auto auto;

  column-gap: 20px;
  row-gap: 10px;
`;

export const Avatar = styled.div`
  border-radius: 50%;
  background: #c4c4c4;
  width: 40px;
  height: 40px;

  grid-column: 1/2;
  grid-row: 1/3;
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

export const Likes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
  grid-column: 2/3;
  grid-row: 3/4;
  /*  align-self: flex-end;
  justify-self: flex-end; */

  span {
    margin-top: 1.5px;
    margin-left: 2px;
  }
`;
