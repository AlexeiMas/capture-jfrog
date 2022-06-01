import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
`;

export const InfoBodyWrapper = styled.div`
  height: 100%;
  margin: 15px 0;

  @media (max-width: 1600px) {
    max-width: 750px;
  }

  @media (max-width: 1200px) {
    max-width: 580px;
  }

  @media (max-width: 900px) {
    max-width: 400px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 45px;
  }
`;

export const WelcomeTextWrapper = styled.div`

`;

export const LargeText = styled.h1`
  font-size: 65px;
  font-weight: 800;
  line-height: 77px;
  text-transform: uppercase;
  background-image: linear-gradient(0deg, rgba(42,178,49,1) 0%, rgba(65,207,72,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  margin: 0;

  @media (max-width: 1200px) {
    font-size: 50px;
    line-height: 55px;
  }
`;

export const SmallText = styled.h2`
  font-size: 35px;
  font-weight: 800;
  line-height: 44px;
  text-transform: uppercase;
  margin: 0;

  @media (max-width: 1200px) {
    font-size: 30px;
    line-height: 33px;
  }

  @media (max-width: 768px) {
    font-size: 25px;
    line-height: 33px;
  }
`;

export const DescriptionWrapper = styled.div`
  margin-top: 15px;
  font-size: 18px;
  line-height: 25px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ButtonWrapper = styled.div`
  margin: 60px 0;

  @media (max-width: 768px) {
    // position: absolute;
    width: 100%;
    bottom: 120px;
    left: 0;
    margin: 0;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 710px;
`;

export const ButtonContentWrapper = styled.div`
  max-width: 710px;

  @media (max-width: 768px) {
    margin: 30px 0;
    // margin: 0 60px;
  }

  @media (max-width: 480px) {
    margin: 30px 0;
    // margin: 0 30px;
  }
`;
