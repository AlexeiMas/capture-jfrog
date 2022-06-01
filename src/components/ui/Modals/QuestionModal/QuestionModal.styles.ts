import styled from 'styled-components/macro';
import background from '../../../../assets/background.svg';

export const QuestionModalWrapper = styled.div`
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
    padding: 55px 0;
  }

  @media (max-width: 320px) {
    width: 280px;
  }
`;

export const WelcomeContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  letter-spacing: 1.2px;
  margin-bottom: 30px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    display: block;
    font-size: 14px;
  }
`;

export const ContentWrapper = styled.div`
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

export const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 130px;
  position: absolute;
  transform: translateY(-50%);
  left: 5%;

  @media (max-width: 1024px) {
    max-width: 160px;
    transform: translateY(-55%);
  }

  @media (max-width: 480px) {
    max-width: 150px;
  }
`;

export const HeaderImg = styled.img`
  max-width: 130px;

  @media (max-width: 1024px) {
    max-width: 100px;
  }

  @media (max-width: 480px) {
    max-width: 90px;
  }
`;

export const HeaderSpan = styled.span`
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  margin: 5px 0;

  @media (max-width: 1024px) {
    font-size: 16px;
    font-weight: 600;
  }

  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;

export const FooterImg = styled.img`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  height: 45px;

  @media (max-width: 1024px) {
    height: 30px;
  }

  @media (max-width: 480px) {
    height: 30px;
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
    margin: 15px -7px;
    top: -68px;
  }
`;