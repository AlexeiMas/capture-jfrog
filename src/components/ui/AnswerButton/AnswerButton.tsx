import React from 'react';
import * as S from './AnswerButton.styles';

interface LoginButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children: string;
  type?: string;
  numeration: number;
}

const AnswerButton: React.FC<LoginButtonProps> = ({
  onClick,
  disabled,
  children,
  type,
  numeration
}: LoginButtonProps) => (
  <S.Button
    style={
      type ? type === "false" ? {
        background: 'linear-gradient(0deg, rgba(178,42,42,1) 0%, rgba(207,65,65,1) 100%)'
      } : type === "true" ? {
        background: 'linear-gradient(0deg, rgba(42,178,49,1) 0%, rgba(65,207,72,1) 100%)'
      } : {} : {}}
    onClick={onClick ? onClick : () => { }}
    disabled={disabled}
  >
    <S.Icon>{numeration}</S.Icon>
    {children}
  </S.Button>
);

export default AnswerButton;
