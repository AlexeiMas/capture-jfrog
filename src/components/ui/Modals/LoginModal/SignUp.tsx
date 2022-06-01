import { signUpWithEmail, signUpWithEmailCleanUp } from 'actions/auth/auth.actions';
import { signUpWithEmailFunc } from 'actions/auth/auth.types';
import { hideModal, showModal } from 'actions/modal/Modal.actions';
import LoginModal from 'components/ui/Modals/LoginModal/LoginModal';
import { SignUpForm } from 'components/ui/Modals/LoginModal/SignUpForm';
import { validateEmail, validatePassword } from 'components/ui/Modals/LoginModal/validators';
import {PATH_RUBRIC} from "helpers/urlList";
import { IErrors } from 'pkg/tulula/auth/api';
import { UseRestAPI } from 'pkg/tulula/auth/context';
import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IRootState } from 'store/store';

// XXX(slava): this is a quick hack to prevent from sending emails from tulula to the new users.
const teamID = '104';

interface IProps {
  signUpWithEmailLoading: boolean;
  errors: IErrors;
  signUpWithEmail: signUpWithEmailFunc;
  signUpWithEmailCleanUp: () => void;
  userToken: string | null;
  hideModal: Function;
  showModal: Function;
  showEmailForm?: boolean;
}

const validate = (submitted: boolean, email: string, password: string, name: string) => {
  const errors: IErrors = {};

  if ((email !== '' || submitted) && !validateEmail(email)) {
    errors.email = ['Must be a valid e-mail address'];
  }

  if (password !== '' || submitted) {
    const validationErrors = validatePassword(password);
    if (validationErrors.length > 0) {
      errors.password = validationErrors;
    }
  }

  if (name === '' && submitted) {
    errors.name = ['Name is required'];
  }

  return errors;
};

export const SignUpComponent = ({
  signUpWithEmail,
  signUpWithEmailLoading,
  signUpWithEmailCleanUp,
  hideModal,
  showModal,
  errors,
  userToken,
  showEmailForm = false,
}: IProps) => {
  // const [useEmail, setUseEmail] = React.useState(false);
  const [useEmail, setUseEmail] = React.useState(showEmailForm);
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
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
      signUpWithEmailCleanUp();
    };
  }, [signUpWithEmailCleanUp]);

  React.useEffect(() => {
    // update validation errors with errors from the response
    setValidationErrors(errors);
  }, [errors]);

  const submitCallback = React.useCallback(() => {
    setSubmitted(true);
    const errors = validate(true, email, password, name);
    setValidationErrors(errors);
    // don't send request if form has any error
    if (Object.keys(errors).length > 0) {
      return;
    }
    signUpWithEmail(authAPI, email, password, name, teamID);
  }, [email, password, name, signUpWithEmail, authAPI]);

  const blurCallback = React.useCallback(() => {
    const errors = validate(submitted, email, password, name);
    setValidationErrors(errors);
  }, [email, name, password, submitted]);

  const useSignInCallback = React.useCallback(() => {
    showModal(LoginModal, { state: 'sign-in' }, 'login');
  }, [showModal]);

  React.useEffect(() => {
    // if we get user token -> close the modal and redirect to rubric
    if (userToken) {
      hideModal();
      navigate(PATH_RUBRIC);
    }
  }, [hideModal, navigate, userToken]);

  return (
    <SignUpForm
      useEmail={useEmail}
      onUseEmail={() => setUseEmail(true)}
      email={email}
      name={name}
      password={password}
      onChangeEmail={setEmail}
      onChangeName={setName}
      onChangePassword={setPassword}
      onSubmit={submitCallback}
      onBlur={blurCallback}
      loading={signUpWithEmailLoading}
      errors={validationErrors}
      onUseSignIn={useSignInCallback}
    />
  );
};

const mapStateToProps = ({ auth, user }: IRootState) => ({
  signUpWithEmailLoading: auth.signUpWithEmailLoading,
  errors: auth.errors,
  userToken: user.token,
});

const mapDispatchToProps = {
  signUpWithEmail,
  signUpWithEmailCleanUp,
  hideModal,
  showModal,
};

export const SignUp = connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);
