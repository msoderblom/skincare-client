import React from "react";
import * as S from "./styled";
import { HiLink } from "react-icons/hi";

const ResellerItem = ({ reseller }) => {
  return (
    <S.Container>
      <S.Name>{reseller?.name}</S.Name>
      {reseller.link && (
        <S.ResellerLink>
          <HiLink size={25} />
          <a href={reseller.link.url}>
            {reseller.link.linkName || reseller.link.url}
          </a>
        </S.ResellerLink>
      )}
      <S.Description>{reseller?.description}</S.Description>
    </S.Container>
  );
};

export default ResellerItem;
