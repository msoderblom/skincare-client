import React from "react";
import * as S from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { userTypes } from "../../redux/user";
import Button from "../Button";
import { appActions } from "../../redux/app";

const routes = [
  {
    path: "/",
    name: "Home",
    exact: true,
  },
  {
    path: "/forum",
    name: "Forum",
    exact: false,
  },
  {
    path: "/blog",
    name: "Blog",
    exact: false,
  },
  {
    path: "/skinfluencers",
    name: "Skinfluencers",
    exact: true,
  },
  {
    path: "/k-beauty",
    name: "K-beauty",
    exact: true,
  },
];

const BurgerMenu = () => {
  const { isOpen } = useSelector((state) => state.app.burgerMenu);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const signOut = () => {
    dispatch({ type: userTypes.SIGN_OUT });
  };

  const handleLinkClick = () => {
    dispatch(appActions.setMenuIsOpen(false));
  };

  return (
    <S.Menu isOpen={isOpen}>
      <S.Nav>
        {routes.map((route) => (
          <S.NavLink
            to={route.path}
            exact={route.exact}
            onClick={handleLinkClick}
          >
            {route.name}
          </S.NavLink>
        ))}
      </S.Nav>
      {user && (
        <Button onClick={signOut} title="Sign Out" className="sign-out-btn" />
      )}
    </S.Menu>
  );
};

export default BurgerMenu;
