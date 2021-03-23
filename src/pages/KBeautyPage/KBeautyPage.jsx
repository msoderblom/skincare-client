import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { kBeautyActions } from "../../redux/k-beauty";
import * as S from "./styled";

const KBeautyPage = () => {
  const dispatch = useDispatch();
  const [brand, setBrand] = useState();

  const { brandslug } = useParams();

  const { brands, getAllBrandsError, loading } = useSelector(
    (state) => state.kBeauty
  );

  useEffect(() => {
    dispatch(kBeautyActions.getAllBrands());
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (brandslug) {
      console.log(brandslug);
      const theBrand = brands.find((branditem) => branditem.slug === brandslug);

      if (theBrand) setBrand(theBrand);
    } else {
      setBrand(null);
    }

    // eslint-disable-next-line
  }, [brandslug]);

  return (
    <S.Container>
      <S.Sidebar>
        <h2>What’s K-beauty?</h2>
        <p>
          Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam
          condimentum tempus diam, ultricies sollicitudin erat facilisis eget.
          Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam
          condimentum tempus diam, ultricies sollicitudin erat facilisis eget.{" "}
        </p>

        <ul>
          {brands &&
            brands.map((brand) => (
              <li key={brands._id}>
                <S.BrandLink to={`/k-beauty/${brand.slug}`}>
                  {brand.name}
                </S.BrandLink>
              </li>
            ))}
        </ul>
      </S.Sidebar>
      <S.MainContent>
        {brand && (
          <S.BrandInfo>
            <S.BrandName>{brand.name}</S.BrandName>
            <S.Description>{brand.description}</S.Description>
            <S.Resellers>
              {brand.resellers.length > 0 &&
                brand.resellers.map((reseller) => <li>{reseller}</li>)}
            </S.Resellers>
          </S.BrandInfo>
        )}
      </S.MainContent>
    </S.Container>
  );
};

export default KBeautyPage;
