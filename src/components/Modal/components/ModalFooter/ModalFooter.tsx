import React from 'react';
import * as S from './ModalFooter.styles';

interface IModalFooter {
  children?: React.ReactNode;
  FooterInformation?: React.FC;
}

const ModalFooter: React.FC<IModalFooter> = ({
  FooterInformation,
  children,
}: IModalFooter) => {
  return (
    <S.ModalFooterContainer>
      <S.ModalFooterWrapper>{children}</S.ModalFooterWrapper>
      {FooterInformation && <FooterInformation />}
    </S.ModalFooterContainer>
  );
};

export default ModalFooter;
