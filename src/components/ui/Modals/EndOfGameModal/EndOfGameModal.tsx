import React from 'react';
import ModalContainer from '../../../Modal/components/ModalContainer';
import { IoClose } from 'react-icons/io5';

import * as S from './EndOfGameModal.styles';
import logo from '../../../../assets/logo.svg';

export interface IEndOfGameModal {
  hideModal: any;
}

const EndOfGameModal: React.FC<IEndOfGameModal> = ({
  hideModal,
}: IEndOfGameModal) => {

  return (
    <ModalContainer>
      <S.CloseButton onClick={hideModal}><IoClose /></S.CloseButton>
      <S.EndOfGameWrapper>
        <S.ContentWrapper>
          <S.LogoImg src={logo} />
          <S.HeadText>Congratulations!</S.HeadText>
          <S.DescriptionText>
            You’ve Captured the Frog! Please enjoy the rest of swampUP and all of your JFrog swag.
            Join us at the closing ceremonies to see if you won a bonus prize!
          </S.DescriptionText>
        </S.ContentWrapper>
      </S.EndOfGameWrapper>
    </ModalContainer>
  );
};

export default EndOfGameModal;
