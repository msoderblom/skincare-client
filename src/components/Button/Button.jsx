import React from "react";
import * as S from "./styled";
import { Link } from "react-router-dom";

const Button = ({ link, title, linkStyles, ...props }) => {
  return (
    <>
      {link ? (
        <Link
          onClick={(e) => !link && e.preventDefault()}
          to={link ? link : ""}
          style={{
            textDecoration: "none",
            display: "flex",
            flexGrow: 1,
            ...linkStyles,
          }}
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
