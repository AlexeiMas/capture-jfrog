import { SignIn } from 'components/ui/Modals/LoginModal/SignIn';
import { SignUp } from 'components/ui/Modals/LoginModal/SignUp';
import React from 'react';
import ModalContainer from '../../../Modal/components/ModalContainer';
import * as S from './LoginModal.styles';

type AuthState = 'sign-in' | 'sign-up';

export interface ILoginModal {
  hideModal: any;
  state: AuthState;
  showEmailForm?: boolean;
}

const LoginModal: React.FC<ILoginModal> = ({ state = 'sign-in', showEmailForm = false }: ILoginModal) => {
  return (
    <ModalContainer>
      <S.LoginModalWrapper>
        <S.ButtonWrapper>
          {state === 'sign-in' && <SignIn key={'sign-in'} showEmailForm={showEmailForm} />}
          {state === 'sign-up' && <SignUp key={'sign-up'} />}
        </S.ButtonWrapper>
      </S.LoginModalWrapper>
    </ModalContainer>
  );
};

export default LoginModal;
