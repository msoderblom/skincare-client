import styled from "styled-components";
import Moment from "react-moment";

export const Container = styled.div`
  padding: 25px 45px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  background-color: white;
`;

export const Tilte = styled.h3`
  font-family: "Playfair Display";
  font-weight: 900;
  font-size: 30px;
  margin: 0 0 15px 0;
  color: #e5bbcc;
`;

export const Body = styled.p`
  font-family: "IBM Plex Sans", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.7);
`;

export const Footer = styled.div`
  font-family: "Poppins", sans-serif;
  line-height: 24px;
  letter-spacing: 0.05em;
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 15px;
  align-items: center;
`;

export const AuthorDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.div`
  border-radius: 50%;
  background: #c4c4c4;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const Username = styled.span`
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

export const Likes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);

  span {
    margin-top: 1.5px;
    margin-left: 2px;
  }
`;

export const Comments = styled(Likes)`
  span {
    margin-top: 0;
    margin-left: 3px;
  }
`;
