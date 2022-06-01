import React from "react";
import LeaderboardLayout from "../../components/Layout/LeaderboardLayout";
import * as S from './LeaderboardPage.styles';
import AstroFrogImage from '../../assets/frog_2.png';
import { LeaderboardBody } from "../../components/LeaderboardBody";
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { Helmet } from "react-helmet-async";


export const LeaderboardPage: React.FC<null> = () => {
  const { width } = useWindowDimensions();
  return (
    <LeaderboardLayout>
      <Helmet>
        <title>Leaderboard - Capture the frog</title>
      </Helmet>
      {width && width >= 768 ? <S.AstroFrog src={AstroFrogImage} /> : ''}
      <S.HomePageWrapper>
        <S.Container>
          <S.Body>
            <LeaderboardBody />
          </S.Body>
        </S.Container>
      </S.HomePageWrapper>
    </LeaderboardLayout>
  )
}
