import styled from "styled-components";
import Moment from "react-moment";

export const Container = styled.div`
  padding: 0 10px;
  max-width: 850px;
  margin: auto auto;
`;

export const ThreadContent = styled.div`
  padding: 10px 15px 10px 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  background-color: white;
  margin-bottom: 20px;

  display: grid;
  grid-template-columns: 1fr 1fr auto;
  grid-template-rows: auto auto auto;
  column-gap: 10px;
  row-gap: 10px;
`;

export const Header = styled.div`
  grid-column: 1/4;
  grid-row: 1/2;
`;

export const AuthorDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  float: right;
`;

export const Avatar = styled.div`
  border-radius: 50%;
  background: #c4c4c4;
  width: 40px;
  height: 40px;
  margin-left: 10px;
`;

export const Info = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

export const Username = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: flex-end;
  line-height: 1;
`;

export const Created = styled(Moment)`
  font-weight: 400;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.7);
  margin-left: 8px;
  line-height: 1;
`;

export const Tilte = styled.h2`
  font-family: "Playfair Display";
  font-weight: 900;
  font-size: 30px;
  margin: 15px 0 0 0;
  color: #e5bbcc;
  line-height: 1;
`;

export const Body = styled.p`
  font-family: "IBM Plex Sans", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.7);
  margin: 10px 0 5px 0;
  grid-column: 1/4;
  grid-row: 2/3;
`;

export const Likes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
  grid-column: 3/4;
  grid-row: 3/4;
  align-self: flex-end;
  justify-self: flex-end;

  span {
    margin-top: 1.5px;
    margin-left: 2px;
  }
`;
