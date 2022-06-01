import React from 'react';
import * as S from './Paginator.styles';
import { IoIosArrowBack } from 'react-icons/io';

interface PaginatorProps {
  getRatingItems: (page: number, search?: string) => any;
  currentPage: number;
  pagesCount: number;
  search: string;
}

export const Paginator: React.FC<PaginatorProps> = ({
  getRatingItems,
  currentPage,
  pagesCount,
  search,
}: PaginatorProps) => {

  const handlePaginator = (page: number, search: string) => {
    if (page < 1 || page > pagesCount) return;
    getRatingItems(page, search);
  }


  const getPages = (first: number, last: number, current: number) => {
    const pages = [];
    for (let i = first; i <= last; i++) {
      pages.push(<S.ButtonPage key={`${Date.now()}${i}`} style={current === i ? { border: "2px solid #FFF" } : {}} onClick={() => {
        handlePaginator(i, search)
      }
      }>{i}</S.ButtonPage>);
    }
    return pages;
  }

  const constructorPaginator = (count: number, current: number) => {
    const constructorPaginator = [...getPages(1, 1, currentPage)];
    if (count <= 6) {
      constructorPaginator.push(...getPages(2, count, currentPage));
      return constructorPaginator;
    }

    if (current > 3) {
      constructorPaginator.push(<S.SpaceWrapper>...</S.SpaceWrapper>);
    }


    if (count - current > 3) {
      if (current === 1) {
        constructorPaginator.push(...getPages(2, current + 2 <= count - 1 ? current + 2 : count, currentPage));
      } else {
        constructorPaginator.push(...getPages(current < 3 ? current : current - 1, current + 1, currentPage));
      }
      constructorPaginator.push(<S.SpaceWrapper>...</S.SpaceWrapper>);
      constructorPaginator.push(...getPages(count, count, currentPage));
    } else {
      constructorPaginator.push(...getPages(count - 3 < current - 1 ? count - 3 : current - 1, count, currentPage));
    }
    return constructorPaginator;
  }

  return (
    <S.PaginatorWrapper>
      <S.ButtonContentWrapper>
        <S.ButtonPagination onClick={() => handlePaginator(currentPage - 1, search)}><IoIosArrowBack /></S.ButtonPagination>
        {
          constructorPaginator(pagesCount, currentPage)
        }
        <S.ButtonPagination onClick={() => handlePaginator(currentPage + 1, search)} style={{ transform: 'scaleX(-1)' }}><IoIosArrowBack /></S.ButtonPagination>
      </S.ButtonContentWrapper>
    </S.PaginatorWrapper>
  );
};
