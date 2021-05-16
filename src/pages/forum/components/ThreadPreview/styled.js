import styled from "styled-components";
import Moment from "react-moment";

export const Container = styled.div`
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
  max-width: 82vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #e5bbcc;
  @media (min-width: ${({ theme }) => theme.tablet}) {
    max-width: 40vw;
    font-size: 30px;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    max-width: 40vw;
  }
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
  /* align-items: flex-end; */
  flex-direction: column;
  line-height: 24px;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

export const Created = styled(Moment)`
  font-weight: 400;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.7);
  line-height: 23px;
  @media (min-width: ${({ theme }) => theme.tablet}) {
    margin-left: 8px;
  }
`;

export const Likes = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);

  span {
    margin-top: 1.5px;
    /* margin-left: 2px; */
  }
`;

export const Comments = styled(Likes)`
  cursor: default;
  span {
    margin-top: 0;
    /* margin-left: 3px; */
  }
`;
