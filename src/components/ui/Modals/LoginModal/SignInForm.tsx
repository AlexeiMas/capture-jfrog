import { Button } from 'components/ui/Button';
import LoginButton from 'components/ui/LoginButton';
import {OAuthFacebook, OAuthGoogle} from "components/ui/Modals/LoginModal/constants";
import { IErrors } from 'pkg/tulula/auth/api';
import React, { useCallback } from 'react';
import * as S from './LoginModal.styles';

const AUTH_API_URL = process.env.REACT_APP_AUTH_API_ENDPOINT;
const APP_URL = process.env.REACT_APP_URL;
const LOGIN_URL = process.env.REACT_APP_LOGIN_URL;

interface IProps {
  useEmail: boolean;
  onUseEmail: () => void;
  onUseSignUp: () => void;
  email: string;
  onChangeEmail: (email: string) => void;
  password: string;
  onChangePassword: (password: string) => void;
  onSubmit: () => void;
  loading: boolean;
  errors: IErrors;
  onBlur: () => void;
}

export const SignInForm = ({
  useEmail,
  onUseEmail,
  onUseSignUp,
  email,
  password,
  onChangePassword,
  onChangeEmail,
  onSubmit,
  onBlur,
  loading = false,
  errors,
}: IProps) => {
  const isLoginActive = !loading && email !== '' && password !== '';

  const submitCallback = useCallback<React.FormEventHandler<HTMLAnchorElement | HTMLFormElement>>(
    e => {
      e.preventDefault();
      onSubmit();
    },
    [onSubmit]
  );
  // quick hack for swamp up.
  const teamSlug = "swamp-up-2022-00002w"
  const back = `${LOGIN_URL}${APP_URL}`

  const oauthParams: string = [
    "app=chat",
    `team=${teamSlug}`,
    `redir=${back}`,
  ]
  .filter(Boolean)
  .join("&");

  const googleAddr = `${AUTH_API_URL}${OAuthGoogle}?${oauthParams}`
  const facebookAddr = `${AUTH_API_URL}${OAuthFacebook}?${oauthParams}`

  return (
    <>
      <S.WelcomeContainer>
        {/*<S.WelcomeIconWrapper>*/}
        {/*  <S.WelcomeIcon src={LockIconSvg} />*/}
        {/*</S.WelcomeIconWrapper>*/}
        Welcome
      </S.WelcomeContainer>
      <LoginButton type="google" href={googleAddr} >LOG IN WITH GOOGLE</LoginButton>
      <LoginButton type="facebook" href={facebookAddr} >LOG IN WITH FACEBOOK</LoginButton>
      <S.HrContainer>
        <S.Hr />
        <S.HrText>or</S.HrText>
        <S.Hr />
      </S.HrContainer>
      {useEmail ? (
        <form onSubmit={submitCallback}>
          {errors[''] ? (
            <>
              {errors[''].map((error, i) => (
                <S.ErrorContainer key={`error-${i}`}>{error}</S.ErrorContainer>
              ))}
            </>
          ) : null}
          <S.InputWrapper>
            <S.Input
              type="text"
              value={email}
              onChange={event => onChangeEmail(event.target.value)}
              placeholder="Email address"
              name="email"
              autoComplete="email"
              onBlur={onBlur}
              autoFocus={true}
            />
          </S.InputWrapper>
          {errors['email'] ? (
            <>
              {errors['email'].map((error, i) => (
                <S.ErrorContainer key={`error-${i}`}>{error}</S.ErrorContainer>
              ))}
            </>
          ) : null}
          <S.InputWrapper>
            <S.Input
              type="password"
              value={password}
              onChange={event => onChangePassword(event.target.value)}
              placeholder="Password"
              name="password"
              autoComplete="current-password"
              onBlur={onBlur}
            />
          </S.InputWrapper>
          {errors['password'] ? (
            <>
              {errors['password'].map((error, i) => (
                <S.ErrorContainer key={`error-${i}`}>{error}</S.ErrorContainer>
              ))}
            </>
          ) : null}
          <S.ButtonContentWrapper>
            <Button onClick={submitCallback}  height="48px"  disabled={!isLoginActive}>
              LOG IN
            </Button>
            <input type="submit"  hidden={true} />
          </S.ButtonContentWrapper>
        </form>
      ) : (
        <>
          <LoginButton onClick={onUseEmail}>LOG IN WITH EMAIL</LoginButton>
        </>
      )}

      <S.SignUpContainer>
        Don’t have an account? <S.SignUpLink onClick={onUseSignUp}>Sign Up</S.SignUpLink>
      </S.SignUpContainer>
    </>
  );
};
