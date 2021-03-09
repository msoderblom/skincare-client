import React from "react";
import * as S from "./styled";
import { Link } from "react-router-dom";

const Button = ({ link, title, ...props }) => {
  return (
    <>
      {link ? (
        <Link
          onClick={(e) => !link && e.preventDefault()}
          to={link ? link : ""}
          style={{ textDecoration: "none" }}
        >
          <S.Button {...props}>{title}</S.Button>
        </Link>
      ) : (
        <S.Button {...props}>{title}</S.Button>
      )}
    </>
  );
};

export default Button;
