import React from "react";
import * as S from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { userTypes } from "../../redux/user";
import Button from "../Button";

// import { decorator as reduxBurgerMenu } from "redux-burger-menu";

const BurgerMenu = () => {
  const { isOpen } = useSelector((state) => state.app.burgerMenu);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const signOut = () => {
    dispatch({ type: userTypes.SIGN_OUT });
  };

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
      {user && (
        <Button onClick={signOut} title="Sign Out" className="sign-out-btn" />
      )}
    </S.Menu>
  );
};

export default BurgerMenu;
