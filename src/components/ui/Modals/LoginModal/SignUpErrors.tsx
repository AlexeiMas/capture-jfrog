import { showModal } from 'actions/modal/Modal.actions';
import LoginModal from 'components/ui/Modals/LoginModal/LoginModal';
import { IErrors } from 'pkg/tulula/auth/api';
import React from 'react';
import { connect } from 'react-redux';
import * as S from './LoginModal.styles';

const userAlreadyExistsError = 'user already exists';

interface IProps {
  errors: IErrors;
}

export const SignUpErrors = ({ errors }: IProps) => {
  const globalErrors = errors[''];
  if (!globalErrors || globalErrors.length === 0) {
    return null;
  }
  return (
    <>
      {globalErrors.map((error, i) => (
        <SignUpError key={`error-${i}`} error={error} />
      ))}
    </>
  );
};

interface IErrorProps {
  error: string;
  showModal: Function;
}

const SignUpErrorComponent = ({ error, showModal }: IErrorProps) => {
  const signInCallback = React.useCallback(() => {
    showModal(LoginModal, { state: 'sign-in', showEmailForm: true }, 'login');
  }, [showModal]);
  if (error === userAlreadyExistsError) {
    return (
      <S.ErrorContainer>
        You already have an account on tulula. Please{' '}
        <S.SignUpLink
          onClick={event => {
            event.preventDefault();
            signInCallback();
          }}
        >
          log in
        </S.SignUpLink>
      </S.ErrorContainer>
    );
  }
  return <S.ErrorContainer>{error}</S.ErrorContainer>;
};

const SignUpError = connect(undefined, {
  showModal,
})(SignUpErrorComponent);
