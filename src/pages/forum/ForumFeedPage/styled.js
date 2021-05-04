import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 10px;
  padding-left: 10px;
  height: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
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
  padding: 10px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 50px;
  height: 100%;
  /* background-color: yellow; */
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const ThreadList = styled.ul`
  grid-row: 2 / 3;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  padding: 10px;
  list-style: none;
  padding-bottom: 20px;
`;
