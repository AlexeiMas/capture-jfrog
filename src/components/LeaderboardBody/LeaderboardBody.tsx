import React, { useEffect, useState } from 'react';
import * as S from './LeaderboardBody.styles';
import { LeaderboardTable } from '../LeaderboardTable';
import { ILeaderboardItem } from '../../reducers/LeaderboardPage.reducer';
import { Paginator } from '../ui/Paginator';
import { IoMdSearch } from 'react-icons/io';

interface LeaderboardBodyProps {
  getRatingItems: (page: number, search?: string) => any;
  getLeaderboardItemsData: ILeaderboardItem[] | null;
  currentPage: number;
  pagesCount: number;
}

export const LeaderboardBody: React.FC<LeaderboardBodyProps> = ({
  getRatingItems,
  getLeaderboardItemsData,
  currentPage,
  pagesCount,
}: LeaderboardBodyProps) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    getRatingItems(1, search);
  }, [getRatingItems]);

  const handleChangeSearch = (e: any) => {
    setSearch(e.target.value);
  }

  const handleSearch = (search: string) => {
    getRatingItems(1, search);
  }

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      handleSearch(search);
    }
  }

  return (
    <S.LeaderboardBodyWrapper>
      <S.LargeText>
        leaderboard
      </S.LargeText>
      <S.LeaderboardSearchInputWrapper>
        <S.LeaderboardSearchInputIconWrapper onClick={() => handleSearch(search)}><IoMdSearch style={{ width: 28, height: 28 }} /></S.LeaderboardSearchInputIconWrapper>
        <S.LeaderboardSearchInput type="text" onChange={handleChangeSearch} onKeyDown={handleKeyDown} placeholder='Search...' />
      </S.LeaderboardSearchInputWrapper>
      <LeaderboardTable items={getLeaderboardItemsData} />
      <Paginator pagesCount={pagesCount} currentPage={currentPage} search={search} />
    </S.LeaderboardBodyWrapper>
  );
};
