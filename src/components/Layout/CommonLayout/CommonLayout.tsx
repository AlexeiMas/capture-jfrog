import React from 'react';
import { Helmet } from 'react-helmet-async';

import Header from '../../Header';
import Footer from '../../Footer';
import * as S from './CommonLayout.styles';

interface ICommonLayout {
  children: React.ReactNode;
  isVisible?: boolean;
}

const CommonLayout: React.FC<ICommonLayout> = ({
  children,
  isVisible,
}: ICommonLayout) => {
  return (
    <S.Main className={isVisible ? 'showModal' : ''}>
      <Helmet>
        <link rel="icon" href='' />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </S.Main>
  );
};

export default CommonLayout;
