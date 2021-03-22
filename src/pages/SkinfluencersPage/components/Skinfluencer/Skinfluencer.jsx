import React from "react";
import { SiTiktok, SiInstagram, SiYoutube, SiTwitter } from "react-icons/si";
import { HiLink } from "react-icons/hi";
import * as S from "./styled";
import { useWindowDimensions } from "../../../../hooks";

const Skinfluencer = ({ skinfluencer }) => {
  const { socialLinks } = skinfluencer;

  const { width } = useWindowDimensions();

  const getPlatformIcon = (platform) => {
    const size = width < 768 ? 30 : 40;

    switch (platform) {
      case "instagram":
        return <SiInstagram size={size} />;
      case "twitter":
        return <SiTwitter size={size} />;
      case "youtube":
        return <SiYoutube size={size} />;
      case "tiktok":
        return <SiTiktok size={size} />;

      default:
        return <HiLink size={size} />;
    }
  };
  return (
    <S.Container>
      <S.Name>{skinfluencer.name}</S.Name>
      <S.Title>{skinfluencer.title}</S.Title>
      <S.About>{skinfluencer.about}</S.About>
      {socialLinks.length > 0 && (
        <S.SocialLinkList>
          {socialLinks.map((socialLink) => (
            <S.SocialLink key={socialLink._id}>
              {getPlatformIcon(socialLink.platform)}
              <a href={socialLink.url} target="_blank" rel="noreferrer">
                {socialLink.linkName}
              </a>
            </S.SocialLink>
          ))}
        </S.SocialLinkList>
      )}
    </S.Container>
  );
};

export default Skinfluencer;
