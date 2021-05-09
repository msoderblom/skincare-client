import styled from "styled-components";
import Input from "../../../../../components/Input";

export const Container = styled.div`
  ${({ theme }) => theme.cardStyle}
  padding: 30px 15px;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    padding: 30px;
  }
`;

export const Title = styled.h2`
  margin-top: 0;
`;
export const NotSignedInContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 10px;
  margin-bottom: 10px;
  span {
    place-self: center end;
  }
`;
export const CommentBox = styled.form`
  margin-bottom: 10px;

  display: grid;
  grid-template-columns: 1fr;
  row-gap: 15px;
  h3 {
    margin: 0;
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    grid-template-columns: 1fr auto;
    column-gap: 30px;
    h3 {
      grid-column: 1 /3;
    }
  }
`;
export const CommentField = styled(Input)`
  margin-bottom: 10px;
`;

export const CommentsList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 15px;

  li:not(:last-child) {
    border-bottom: 1px solid;
    border-bottom-color: #a3a3a429;
  }
`;

export const CommentGroup = styled.li`
  /* display: grid;
  grid-template-columns: auto auto 1fr;
  grid-template-rows: auto auto auto auto;
  column-gap: 20px;
  row-gap: 8px;

  padding-bottom: 15px; */
`;
