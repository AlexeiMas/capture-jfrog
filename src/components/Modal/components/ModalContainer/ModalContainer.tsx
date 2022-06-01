import React from 'react';
import * as S from '../../Modal.styles';

interface IModalContainer {
  children?: any;
}

const ModalContainer: React.FunctionComponent<IModalContainer> = ({
  children,
}: IModalContainer) => <S.Modal>{children}</S.Modal>;

export default ModalContainer;
