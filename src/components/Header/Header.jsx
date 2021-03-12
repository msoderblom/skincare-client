import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import * as S from "./styled";
import decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { userTypes } from "../../redux/user";
import NavBar from "../NavBar/NavBar";
import Button from "../Button/Button";
import { appActions, appTypes } from "../../redux/app";
import BurgerBtn from "../BurgerBtn/BurgerBtn";

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  // const history = useHistory();
  const { isOpen } = useSelector((state) => state.app.burgerMenu);

  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    const token = profile?.token;
    if (token) {
      const decodedToken = decode(token);
      // Check if the users token has expired, if true then logout will
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        signOut();
      }

      if (profile.user) {
        dispatch({
          type: userTypes.SET_USER,
          payload: profile.user,
        });
      }
    }

    // eslint-disable-next-line
  }, [location]);

  const signOut = () => {
    dispatch({ type: userTypes.SIGN_OUT });
  };

  const handleMenuClick = () => {
    dispatch(appActions.toggleBurgerMenu());
  };

  return (
    <S.Container>
      <BurgerBtn open={isOpen} onClick={handleMenuClick} id="burgerBtn" />
      <h1>SiteName</h1>
      <NavBar />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {user && <p>User: {user.username}</p>}
        {user && <button onClick={signOut}>Sign Out</button>}
        {!user && <Button link="/auth" title="Sign In / Sign Up" />}
      </div>
    </S.Container>
  );
};

export default Header;
