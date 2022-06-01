import styled from 'styled-components/macro';

interface ButtonProps {
  onClick?: (...args: any) => any;
}

export const Button = styled.button<ButtonProps>`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  width: 100%;
  min-height: 48px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #FFF;
  background: transparent;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: 24px 0;
  text-decoration: none;
  box-sizing: border-box;
  position: relative;
  padding-left: 60px;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-right: 10px;
  text-align: left;
  border-radius: 24px;
  outline: none;
  border: none;

  @media (max-width: 480px) {
    padding-left: 50px;
  }

  &:after {
    content: "";
    position: absolute;
    border: 1px solid #FFF;
    border-radius: 24px;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  &:hover {
    font-weight: 500;
    font-size: 23.9px;

    @media (max-width: 1024px) {
      font-size: 18px;
    }
  
    @media (max-width: 768px) {
      font-size: 16px;
    }
  
    @media (max-width: 480px) {
      font-size: 14px;
    }

    &:after {
      content: "";
      position: absolute;
      border: 2px solid #FFF;
      border-radius: 24px;
      left: 0;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }
  }

  &:active {
    background: linear-gradient(#FFF, #FFF); 
    color: #000;
  }

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    border-radius: 24px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Icon = styled.span`
  width: 35px;
  height: 35px;
  border: 1px solid #FFF;
  border-radius: 50%;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 6px;
  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    margin: 0 10px;
  }

  @media (max-width: 480px) {
    margin: 0 5px;
  }
`;
