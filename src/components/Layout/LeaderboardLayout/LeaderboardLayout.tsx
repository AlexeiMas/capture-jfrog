import React from 'react';
import { Helmet } from 'react-helmet-async';

import Header from '../../Header';
import * as S from './LeaderboardLayout.styles';

interface ILeaderboardLayout {
  children: React.ReactNode;
  isVisible?: boolean;
}

const LeaderboardLayout: React.FC<ILeaderboardLayout> = ({
  children,
  isVisible,
}: ILeaderboardLayout) => {
  return (
    <S.Main className={isVisible ? 'showModal' : ''}>
      <Helmet>
        <link rel="icon" href='' />
      </Helmet>
      <Header />
      {children}
    </S.Main>
  );
};

export default LeaderboardLayout;
