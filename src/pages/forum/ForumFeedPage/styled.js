import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 20px;
  padding-left: 10px;
  padding-right: 10px;
  height: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    grid-template-columns: 2.5fr 3fr;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    grid-template-columns: 1.5fr 3fr;
  }
`;
export const SideBar = styled.div`
  padding: 20px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;
export const SignInBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ThreadsContainer = styled.div`
  /* padding: 10px; */

  /* padding-bottom: 20px; */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 50px;
  align-content: start;
  row-gap: 15px;
  height: 100%;
  /* background-color: yellow; */
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    /* padding: 10px; */
  }
`;
export const ThreadList = styled.ul`
  grid-row: 2 / 3;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  list-style: none;
  padding: 0;
  /* padding-bottom: 20px; */
  margin: 0;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    /* padding: 10px; */
  }
`;
