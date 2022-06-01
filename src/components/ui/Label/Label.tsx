import React from 'react';
import * as S from './Label.styles';

interface ILabel {
  isBold?: boolean;
  title?: string;
  children?: React.ReactNode;
  htmlFor?: string;
  className?: string;
}

const Label: React.FC<ILabel> = ({
  title,
  isBold,
  children,
  htmlFor,
  className,
}: ILabel) => {
  return (
    <S.Label className={className} htmlFor={htmlFor} isBold={isBold}>
      {title || children}
    </S.Label>
  );
};

export default Label;
