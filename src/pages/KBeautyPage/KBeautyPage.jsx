import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { kBeautyActions } from "../../redux/k-beauty";
import * as S from "./styled";

const KBeautyPage = () => {
  const dispatch = useDispatch();

  const { brands, getAllBrandsError, loading } = useSelector(
    (state) => state.kBeauty
  );

  useEffect(() => {
    dispatch(kBeautyActions.getAllBrands());
    // eslint-disable-next-line
  }, []);

  return (
    <S.Container>
      <p>kBeautyPage</p>

      {brands && brands.map((brand) => <p key={brands._id}>{brand.name}</p>)}
    </S.Container>
  );
};

export default KBeautyPage;
