import {AnchorHTMLAttributes} from "react";
import styled from 'styled-components/macro';

export interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement>{
  onClick?: (...args: any) => any;
}

export const Button = styled.a<ButtonProps>`
  font-family: 'Roboto', sans-serif;
  width: 100%;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #FFF;
  outline: none;
  transition: 0.1s all;
  color: #FFF;
  background: transparent;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: 20px 0;
  text-decoration: none;
  &:hover {
    border-color: #40BE46;
  }


  border-radius: 24px;
  height: 48px;
  font-size: 16px;
`;

export const Icon = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;
  margin: 0 10px;
`;
