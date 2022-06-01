import styled from 'styled-components/macro';

interface ButtonProps {
  isActive?: boolean;
  disabled?: boolean;
  fontSize?: string;
  width?: string;
  height?: string;
}

export const Button = styled.a<ButtonProps>`
  font-size: ${(p) => p.fontSize ? p.fontSize : p.theme.primaryButton.fontSize};
  width: ${(p) => p.width ? p.width : 'auto'};
  height: ${(p) => p.height ? p.height : 'auto'};
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  transition: 0.1s all;
  text-transform: uppercase;
  text-decoration: none;
  color: #FFF;
  font-weight: ${(p) => (p.theme.primaryButton.fontWeight ? p.theme.primaryButton.fontWeight : 'normal')};
  border-radius: ${(p) => p.theme.primaryButton.borderRadius ? p.theme.primaryButton.borderRadius : 0};
  &:hover {
    background: linear-gradient(#DEFFE0, #ACFFB0); 
    color: #40BE46;
  }
  ${(p) => p.disabled && `pointer-events: none`};
  ${(p) => p.disabled ? `background-color: ${p.theme.buttonDisabled};` : `background: linear-gradient(#41CF48, #2AB231);`};
  &:active {
    background: linear-gradient(#FFF, #FFF); 
    color: #40BE46;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
