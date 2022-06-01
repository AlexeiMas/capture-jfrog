import React from 'react';
import { ILeaderboardItem } from '../../reducers/LeaderboardPage.reducer';
import * as S from './LeaderboardTable.styles';

interface LeaderboardTableProps {
  items: ILeaderboardItem[] | null,
}

const getBoardItem = (item: ILeaderboardItem) => {
  return (
    <S.LeaderboardBodyItem key={`${item.place}_${item.name}`}>
      <S.LeaderboardBodyColumnRank>
        {item.place}
        {item.place === 1 ? <S.LeaderboardBodyItemMedalGold /> : ''}
        {item.place === 2 ? <S.LeaderboardBodyItemMedalSilver /> : ''}
        {item.place === 3 ? <S.LeaderboardBodyItemMedalBronze /> : ''}
      </S.LeaderboardBodyColumnRank>
      <S.LeaderboardBodyColumnName><b>{item.name}</b></S.LeaderboardBodyColumnName>
      <S.LeaderboardBodyColumnScore>{item.score}</S.LeaderboardBodyColumnScore>
      <S.LeaderboardBodyColumnTime>{item.time}</S.LeaderboardBodyColumnTime>
    </S.LeaderboardBodyItem>
  )
}

export const LeaderboardTable: React.FC<LeaderboardTableProps> = ({ items }: LeaderboardTableProps) => (
  <S.LeaderboardBodyTable>
    <S.LeaderboardBodyItemHead>
      <S.LeaderboardBodyColumnRank>Rank</S.LeaderboardBodyColumnRank>
      <S.LeaderboardBodyColumnName>Name</S.LeaderboardBodyColumnName>
      <S.LeaderboardBodyColumnScore>Score</S.LeaderboardBodyColumnScore>
      <S.LeaderboardBodyColumnTime>Time,sec</S.LeaderboardBodyColumnTime>
    </S.LeaderboardBodyItemHead>
    {items ? items.map(item => getBoardItem(item)) : ''}
  </S.LeaderboardBodyTable>
);
