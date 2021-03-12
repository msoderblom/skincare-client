import React from "react";
import * as S from "./styled";
import { useSelector } from "react-redux";

// import { decorator as reduxBurgerMenu } from "redux-burger-menu";

const BurgerMenu = () => {
  const { isOpen } = useSelector((state) => state.app.burgerMenu);

  return (
    <S.Menu isOpen={isOpen}>
      <S.Nav>
        <S.NavLink to="/" exact>
          Home
        </S.NavLink>
        <S.NavLink to="/forum">Forum</S.NavLink>
        <S.NavLink to="/blog">Blog</S.NavLink>
        <S.NavLink to="/skinfluencers" exact>
          Skinfluencers
        </S.NavLink>
        <S.NavLink to="/k-beauty" exact>
          K-beauty
        </S.NavLink>
      </S.Nav>
    </S.Menu>
  );
};

export default BurgerMenu;
