import React from 'react';
import { ButtonProps } from './LoginButton.styles';
import * as S from './LoginButton.styles';
import FacebookIconSvg from '../../../assets/facebook_icon.svg';
import GoogleIconSvg from '../../../assets/google_icon.svg';

interface LoginButtonProps extends ButtonProps {
  children: string;
  type?: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ children, type, ...props }: LoginButtonProps) => (
  <S.Button {...props}>
    {type ? <S.Icon src={type === 'facebook' ? FacebookIconSvg : type === 'google' ? GoogleIconSvg : ''} /> : ''}
    {children}
  </S.Button>
);

export default LoginButton;
