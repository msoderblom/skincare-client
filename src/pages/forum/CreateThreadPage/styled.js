import styled from "styled-components";
import defaultInput from "../../../components/Input";
import { TextField } from "@material-ui/core";
import Button from "../../../components/Button";
import SelectInput from "../../../components/SelectInput/SelectInput";

export const Input = styled(defaultInput)`
  .MuiOutlinedInput-notchedOutline {
    /* border-color: white; */
    border-color: #b6a9e9;
    /* border-width: 3px; */
    /* background: white; */
  }
  .duIhkR .MuiOutlinedInput-notchedOutline {
    border-color: #b6a9e9;
    /* border: none; */
  }
`;

export const Container = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  /* justify-content: center; */
  justify-items: center;
`;
export const Form = styled.form`
  width: 95%;
  max-width: 850px;
  background-color: white;
  /* background: #fdd3da; */
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto auto;
  row-gap: 20px;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr auto;
    grid-template-rows: auto auto auto auto;
    row-gap: 50px;
    width: 80%;
  }
`;

export const TitleInput = styled(Input)`
  grid-row: 1 / 2;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    grid-column: 1 / 4;
    grid-row: 1 / 2;
  }
`;
export const BodyInput = styled(TextField)`
  grid-row: 2 / 3;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    grid-column: 1 / 7;
  }
`;
export const CategorySelect = styled(SelectInput)`
  grid-row: 3 / 4;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    grid-column: 1 / 3;
  }
`;
export const TagsInput = styled(Input)`
  grid-row: 4 / 5;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    grid-column: 4 / 7;
    grid-row: 3 / 4;
  }
`;
export const SubmitButton = styled(Button)`
  grid-row: 5 / 6;
  @media (min-width: ${({ theme }) => theme.tablet}) {
    grid-column: 6 / 7;
    grid-row: 4 / 5;
  }
`;
