import { signInWithEmail, signInWithEmailCleanUp } from 'actions/auth/auth.actions';
import { signInWithEmailFunc } from 'actions/auth/auth.types';
import { hideModal, showModal } from 'actions/modal/Modal.actions';
import LoginModal from 'components/ui/Modals/LoginModal/LoginModal';
import { SignInForm } from 'components/ui/Modals/LoginModal/SignInForm';
import { validateEmail } from 'components/ui/Modals/LoginModal/validators';
import {PATH_RUBRIC} from "helpers/urlList";
import { IErrors } from 'pkg/tulula/auth/api';
import { UseRestAPI } from 'pkg/tulula/auth/context';
import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IRootState } from 'store/store';

interface IProps {
  signInWithEmailLoading: boolean;
  errors: IErrors;
  signInWithEmail: signInWithEmailFunc;
  signInWithEmailCleanUp: () => void;
  userToken: string | null;
  hideModal: Function;
  showModal: Function;
  showEmailForm?: boolean;
}

const validate = (submitted: boolean, email: string, password: string) => {
  const errors: IErrors = {};

  if ((email !== '' || submitted) && !validateEmail(email)) {
    errors.email = ['Must be a valid e-mail address'];
  }

  if (password === '' && submitted) {
    errors.password = ['Password is required'];
  }

  return errors;
};

export const SignInComponent = ({
  signInWithEmail,
  signInWithEmailLoading,
  signInWithEmailCleanUp,
  hideModal,
  showModal,
  errors,
  userToken,
  showEmailForm = false,
}: IProps) => {
  const [useEmail, setUseEmail] = React.useState(showEmailForm);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // errors are set if fields are invalid
  const [validationErrors, setValidationErrors] = React.useState<IErrors>({});
  // submitted is a marker that user clicked submit button
  // some errors (required fields) are shown only when user clicked submit
  const [submitted, setSubmitted] = React.useState<boolean>(false);

  const authAPI = UseRestAPI();
  const navigate = useNavigate();

  // clean errors when unmount
  React.useEffect(() => {
    return () => {
      signInWithEmailCleanUp();
    };
  }, [signInWithEmailCleanUp]);

  React.useEffect(() => {
    // update validation errors with errors from the response
    setValidationErrors(errors);
  }, [errors]);

  const submitCallback = React.useCallback(() => {
    setSubmitted(true);
    const errors = validate(true, email, password);
    setValidationErrors(errors);
    // don't send request if form has any error
    if (Object.keys(errors).length > 0) {
      return;
    }
    signInWithEmail(authAPI, email, password, true);
  }, [signInWithEmail, authAPI, email, password]);

  const blurCallback = React.useCallback(() => {
    const errors = validate(submitted, email, password);
    setValidationErrors(errors);
  }, [email, password, submitted]);

  const useSignUpCallback = React.useCallback(() => {
    showModal(LoginModal, { state: 'sign-up' }, 'login');
  }, [showModal]);

  React.useEffect(() => {
    // if we get user token -> close the modal and redirect to rubric
    if (userToken) {
      hideModal();
      navigate(PATH_RUBRIC);
    }
  }, [hideModal, navigate, userToken]);

  return (
    <SignInForm
      useEmail={useEmail}
      onUseEmail={() => setUseEmail(true)}
      email={email}
      password={password}
      onChangeEmail={setEmail}
      onChangePassword={setPassword}
      onSubmit={submitCallback}
      onBlur={blurCallback}
      loading={signInWithEmailLoading}
      errors={validationErrors}
      onUseSignUp={useSignUpCallback}
    />
  );
};

const mapStateToProps = ({ auth, user }: IRootState) => ({
  signInWithEmailLoading: auth.signInWithEmailLoading,
  errors: auth.errors,
  userToken: user.token,
});

const mapDispatchToProps = {
  signInWithEmail,
  signInWithEmailCleanUp,
  hideModal,
  showModal,
};

export const SignIn = connect(mapStateToProps, mapDispatchToProps)(SignInComponent);
