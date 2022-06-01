import styled from 'styled-components';

export const PaginatorWrapper = styled.div`
  margin: 30px 0;

  @media (max-width: 768px) {
    margin: 50px 0;
  }
`;

export const ButtonContentWrapper = styled.div`
  display: flex;
`;



export const ButtonPagination = styled.button`
  margin: 0 5px;
  font-size: 32px;
  width: 48px;
  height: 48px;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding-right: 10px;
  outline: none;
  transition: 0.1s all;
  text-transform: uppercase;
  color: #FFF;
  background: linear-gradient(#41CF48, #2AB231);
  font-weight: 400;
  border-radius: 50%;
  &:hover {
    background: linear-gradient(#DEFFE0, #ACFFB0); 
    color: #40BE46;
    ${(p) => p.disabled && `pointer-events: none`};
    ${(p) => p.disabled && `background-color: ${p.theme.buttonDisabled};`};
  }

  &:active {
    background: linear-gradient(#FFF, #FFF); 
    color: #40BE46;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 600px) {
    margin: 0 3px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    padding: 0;
    width: 35px;
    height: 35px;
  }
`;

export const ButtonPage = styled.button`
  margin: 0 5px;
  font-size: 26px;
  width: 48px;
  height: 48px;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #FFF;
  padding: 15px;
  outline: none;
  transition: 0.1s all;
  text-transform: uppercase;
  color: #FFF;
  background: transparent;
  font-weight: 400;
  border-radius: 50%;
  &:hover {
    border: 2px solid #FFF;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 600px) {
    margin: 0 3px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    padding: 0;
    width: 35px;
    height: 35px;
  }
`;

export const SpaceWrapper = styled.span`
  display: flex;
  align-items: flex-end;
  margin: 0 2px;
  font-size: 24px;
`;
