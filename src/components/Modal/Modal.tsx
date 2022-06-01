import React, { FC } from 'react';
// import OutsideClickHandler from 'react-outside-click-handler';
import * as S from './Modal.styles';

interface IModal {
  hideModal: any;
  ModalComponent: FC;
  isVisible: boolean;
  componentProps: any;
  modalIsHiding: boolean;
}

const Modal: any = ({ hideModal, ModalComponent, isVisible, componentProps, modalIsHiding }: IModal) => {
  if (!isVisible) return null;
  return (
    <S.Container shouldModalClose={modalIsHiding}>
      <S.ModalClose onClick={hideModal} />
      <S.ModalContent shouldModalClose={modalIsHiding}>
        <S.ModalBody isWithoutHeader={componentProps.isWithoutHeader}>
          <ModalComponent {...componentProps} />
        </S.ModalBody>
      </S.ModalContent>
    </S.Container>
  );
};

export default Modal;
