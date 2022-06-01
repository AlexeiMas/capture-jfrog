import styled from 'styled-components/macro';

export const HomePageWrapper = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 15px;
  margin-bottom: auto;
  z-index: 0;
`;

export const Body = styled.div`
  padding: 5% 0;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const AstroFrog = styled.img`
  position: absolute;
  max-height: 880px;
  right: 50px;
  bottom: -15px;
  z-index: 0;

  @media (max-width: 1600px) {
    right: -100px;
  }

  @media (max-width: 1200px) {
    max-height: 780px;
    bottom: 0px;
  }

  @media (max-width: 1024px) {
    max-height: 685px;
    right: -120px;
  }

  @media (max-width: 768px){
    margin-left: auto;
    max-height: 400px;
    right: -10px;
    margin-bottom: 85px;
    position: initial;
  }

  @media (max-width: 480px) {
    max-height: 300px;
    margin-bottom: 95px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;

  @media (max-width: 1024px) {
    margin: 0 40px;
  }

  @media (max-width: 1200px) {
    margin: 0 40px;
  }

  @media (min-width: 1200px) {
    max-width: 1150px;
  }

  @media (max-width: 768px) {
    margin: 0 60px;
    padding: 10px;
  }

  @media (max-width: 480px) {
    margin: 0 30px;
  }
`;
