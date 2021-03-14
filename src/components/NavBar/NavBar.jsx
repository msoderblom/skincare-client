import React from "react";

import * as S from "./styled";

const NavBar = ({ ...props }) => {
  return (
    <S.Nav {...props}>
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
  );
};

export default NavBar;
