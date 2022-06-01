import styled from 'styled-components/macro';
import background from '../../../../assets/background.svg';

export const EndOfGameWrapper = styled.div`
  font-family: 'Roboto',sans-serif;
  background-image: url(${background});
  background-size: cover;
  border: 1px solid #FFF;
  border-radius: 12px;
  width: 860px;
  padding: 75px 0;


  @media (max-width: 1024px) {
    width: 540px;
  }

  @media (max-width: 768px) {
    width: 470px;
  }

  @media (max-width: 480px) {
    width: 320px;
  }

  @media (max-width: 320px) {
    width: 280px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 180px;

  @media (max-width: 1024px) {
    margin: 0 80px;
  }

  @media (max-width: 768px) {
    margin: 0 60px;
  }

  @media (max-width: 480px) {
    margin: 0 25px;
  }

  @media (max-width: 320px) {
    margin: 0 5px;
  }
`;

export const LogoImg = styled.img`
  max-width: 130px;

  @media (max-width: 1024px) {
    max-width: 100px;
  }

  @media (max-width: 480px) {
    max-width: 90px;
  }
`;

export const HeadText = styled.h1`
  color: #2ab231;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const DescriptionText = styled.p`
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  margin: 15px;
  width: 55px;
  height: 55px;
  background: transparent;
  font-size: 55px;
  color: #FFF;
  padding: 0;
  border: none;

  &:hover{
    cursor: pointer;
    color: #40BE46;
  }

  @media (max-width: 480px) {
    top: -68px;
  }
`;