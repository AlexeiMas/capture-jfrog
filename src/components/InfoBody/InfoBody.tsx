import React from 'react';
import * as S from './InfoBody.styles';
import { Button } from '../ui/Button';

interface InfoBodyProps {
  smallText: string;
  largeText: string;
  description: string;
  onPlay?: () => void;
}

const getFromString = (html: string) => {
  return (
    <div className="content" dangerouslySetInnerHTML={{ __html: html }}></div>
  );
}

export const InfoBody: React.FC<InfoBodyProps> = ({
  smallText,
  largeText,
  description,
  onPlay,
}: InfoBodyProps) => (
  <S.InfoBodyWrapper>
    <S.WelcomeTextWrapper>
      <S.SmallText>
        {smallText}
      </S.SmallText>
      <S.LargeText>
        {largeText}
      </S.LargeText>
    </S.WelcomeTextWrapper>
    <S.DescriptionWrapper>
      <S.ContentWrapper>
        {getFromString(description)}
      </S.ContentWrapper>
    </S.DescriptionWrapper>
    <S.ButtonWrapper>
      <S.ButtonContentWrapper>
        <Button
          onClick={() => {
            onPlay && onPlay();
          }}
          width="260px"
          height="48px"
          fontSize="18px"
        >
          PLAY
        </Button>
      </S.ButtonContentWrapper>
    </S.ButtonWrapper>
  </S.InfoBodyWrapper>
);
