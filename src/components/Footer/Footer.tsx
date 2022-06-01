import React from 'react';
import * as S from './Footer.styles';
import FooterLinks from '../ui/FooterLinks';
import { useLocation } from 'react-router-dom'

const Footer: React.FC<null> = () => {
  const location = useLocation();
  const footerLinks = [
    {
      href: 'https://jfrog.com/privacy-policy/',
      label: 'Privacy Policy',
      isActive: false,
      borderRight: true
    },
    {
      href: 'https://jfrog.com/jfrog-cookies-policy/',
      label: 'Cookies Policy',
      isActive: false,
      borderRight: true
    },
    {
      href: 'https://swampup.jfrog.com/code-of-conduct/',
      label: 'Code of conduct',
      isActive: false,
      borderRight: true
    },
    {
      href: 'https://tulu.la/gamification',
      label: 'Powered by tulu.la',
      isActive: false,
      borderRight: false
    }
  ]

  return (
    <S.Container>
      <S.Footer style={location.pathname.includes("game") ? {
        textAlign: 'left',
        flexDirection: "column",
        alignItems: "flex-start",
        paddingRight: 50,
      } : {}}>
        <S.FooterCompany>© 2022 JFrog Ltd All Rights Reserved</S.FooterCompany>
        <FooterLinks align={location.pathname.includes("game") ? "left" : "center"} links={footerLinks} />
      </S.Footer>
    </S.Container >
  );
};

export default Footer;
