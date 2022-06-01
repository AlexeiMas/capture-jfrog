import styled from 'styled-components/macro';

export const HomePageWrapper = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 15px;
  margin-bottom: auto;
  z-index: 0;
`;

export const Body = styled.div`
  padding: 0;
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
    max-height: 585px;
    right: -100px;
    bottom: 100px;
  }

  @media (max-width: 768px),  (max-heigt: 768px){
    max-height: 450px;
    right: -10px;
    bottom: 150px;
  }

  @media (max-width: 480px) {
    max-height: 300px;
    bottom: 180px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1150px;

  @media (max-width: 1200px) {
    max-width: 1000px;
  }

  @media (max-width: 1024px) {
    margin: 0 30px;
  }

  @media (max-width: 768px) {
    margin: 0 60px;
    border-radius: 12px;
    padding: 20px 0;
  }

  @media (max-width: 480px) {
    margin: 0 20px;
  }
`;
