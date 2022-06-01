import React from 'react';
import Container from '../ui/Container';
import * as S from './Header.styles';
import { useNavigate, Link } from 'react-router-dom';
import MobileMenu from '../ui/MobileMenu';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Header: React.FC<null> = () => {

  const getitem = (href: string, label: string, isActive: boolean) => {
    return (
      <S.LinkItem>
        {isActive ? <S.LinkItemActive><Link to={href}>{label}</Link></S.LinkItemActive> : <Link to={href}>{label}</Link>}
      </S.LinkItem>
    )
  }

  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  return (
    <S.Header>
      <Container>
        <S.Logo
          onClick={() => navigate('/')}
          title="Logo"
        />
        {width && width > 768 ?
          <S.LinksContainer>
            {getitem('/', 'Home', window.location.pathname.includes('/') && window.location.pathname.length < 2)}
            {/* {getitem('/our-story', 'Our story', window.location.pathname.includes('/our-story'))} */}
            {getitem('/leaderboard', 'Leaderboard', window.location.pathname.includes('/leaderboard'))}
            {getitem('/rules', 'Rules', window.location.pathname.includes('/rules'))}
          </S.LinksContainer> : <MobileMenu />
        }
      </Container>
    </S.Header>
  );
};

export default Header;
