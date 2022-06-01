import styled from 'styled-components/macro';

export const HomePageWrapper = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 15px;
  margin-bottom: auto;
  z-index: 0;
  min-height: 720px;

  @media (max-width: 768px){
    min-height: auto;
  }
`;

export const Body = styled.div`
  padding: 5% 0;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const AstroFrog = styled.img`
  position: absolute;
  max-height: 840px;
  right: 50px;
  bottom: -15px;
  z-index: 0;

  @media (max-width: 1600px) {
    right: -150px;
  }

  @media (max-width: 1200px) {
    max-height: 780px;
    right: -150px;
    bottom: 0px;
  }

  @media (max-width: 1024px) {
    max-height: 685px;
    right: -150px;
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

export const AstroFrogEarth = styled.div`
display: none;
  position: absolute;
  right: -40px;
  bottom: -230px;
  z-index: 0;
  height: 400px;
  border-radius: 200px;

  @media (max-width: 768px) {
    display: block;
    width: 110%;
    background-color: #969399;
    transform: rotateZ(-188deg);
  }

  @media (max-width: 480px) {
    width: 130%;
    right: -65px;
    background-color: #969399;
    transform: rotateZ(-198deg);
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1150px;

  @media (max-width: 1024px) {
    margin: 0 50px;
  }

  @media (max-width: 1200px) {
    max-width: 950px;
    margin: 0 40px;
  }

  @media (max-width: 768px) {
    margin: 0 60px;
    padding: 10px;
  }

  @media (max-width: 480px) {
    margin: 0 30px;
  }
`;
