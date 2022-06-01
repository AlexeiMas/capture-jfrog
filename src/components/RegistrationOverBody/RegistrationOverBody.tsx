import React from 'react';
import * as S from './RegistrationOverBody.styles';

interface InfoBodyProps {
  smallText: string;
  largeText: string;
  description: string;
}

const getFromString = (html: string) => {
  return (
    <div className="content" dangerouslySetInnerHTML={{ __html: html }}></div>
  );
}

export const RegistrationOverBody: React.FC<InfoBodyProps> = ({
  smallText,
  largeText,
  description,
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
  </S.InfoBodyWrapper>
);
