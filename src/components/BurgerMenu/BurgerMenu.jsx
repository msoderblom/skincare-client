import React from "react";
import * as S from "./styled";
import { useSelector } from "react-redux";

// import { decorator as reduxBurgerMenu } from "redux-burger-menu";

const BurgerMenu = () => {
  const { isOpen } = useSelector((state) => state.app.burgerMenu);

  return (
    <S.Menu isOpen={isOpen}>
      <a href="/">
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        About us
      </a>
      <a href="/">
        <span role="img" aria-label="price">
          &#x1f4b8;
        </span>
        Pricing
      </a>
      <a href="/">
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        Contact
      </a>
    </S.Menu>
  );
};

export default BurgerMenu;
