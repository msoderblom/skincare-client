import React from "react";
import { useSelector } from "react-redux";
import * as S from "./styled";

const BurgerBtn = ({ open, ...props }) => {
  return (
    <S.Burger open={open} {...props}>
      <div />
      <div />
      <div />
    </S.Burger>
  );
};

export default BurgerBtn;
