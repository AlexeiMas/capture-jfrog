import React from 'react';
import * as S from './MobileMenu.styles';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

const MobileMenu: React.FC<any> = () => {

  return (
    <S.MobileMenuWrap>
      <Menu right>
        <Link to={'/'}>Home</Link>
        {/* <Link to={'/our-story'}>Our story</Link> */}
        <Link to={'/leaderboard'}>Leaderboard</Link>
        <Link to={'/rules'}>Rules</Link>
      </Menu>
    </S.MobileMenuWrap>
  );
};

export default MobileMenu;
