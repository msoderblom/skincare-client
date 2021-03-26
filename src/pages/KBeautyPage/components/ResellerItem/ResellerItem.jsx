import React from "react";
import * as S from "./styled";
import { HiLink } from "react-icons/hi";

const ResellerItem = ({ reseller }) => {
  return (
    <S.Container>
      <S.Name>{reseller?.name}</S.Name>
      <p>{reseller.description}</p>
      <HiLink />
      <a href={reseller.link.url}>
        {reseller.link.linkName || reseller.link.url}
      </a>
    </S.Container>
  );
};

export default ResellerItem;
