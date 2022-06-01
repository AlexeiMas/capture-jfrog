import styled from 'styled-components/macro';
import ByTululaIcon from '../../assets/tulula_logo.png';

export const RubricPageWrapper = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 15px;
  margin-bottom: auto;
  z-index: 1;
`;

export const PlanetOrbitWrapper = styled.div`
  min-height: 585px;
  margin-top: 150px;
  min-height: 670px;
  @media (max-width: 1200px) {
    min-height: 690px;
  }

  @media (max-width: 768px) {
    min-height: 780px;
  }

  @media (max-width: 600px) {
    min-height: 830px;
  }
`;

export const PlanetOrbitContainer = styled.div`
  position: absolute;
  border: 2px solid rgba(255,255,255,0.2);
  border-radius: 50%;
  right: 300px;
  bottom: 200px;
  transform: translateX(45%) translateY(50%);
  @media (max-width: 1700px) {
    right: 220px;
  }

  @media (max-width: 1560px) {
    right: 50px;
  }

  @media (max-width: 1200px){
    bottom: 245px;
    right: 250px;
  }

  @media (max-width: 650px){
    right: 200px;
  }

  @media (max-width: 600px){
    right: 140px;
    bottom: 300px;
  }

  @media (max-width: 480px){
    right: 100px;
  }
`;

export const PlanetOrbit1 = styled.div`
  width: 800px;
  height: 800px;

  @media (max-width: 1700px) {
    width: 660px;
    height: 660px;
  }

  @media (max-width: 1400px) {
    width: 650px;
    height: 650px;
  }

  @media (max-width: 1200px) {
    width: 450px;
    height: 450px;
  }

  @media (max-width: 768px) {
    width: 500px;
    height: 500px;
  }

  @media (max-width: 768px) {
    width: 510px;
    height: 510px;
  }
`;

export const PlanetOrbit2 = styled.div`
  width: 1050px;
  height: 1050px;
  @media (max-width: 1700px) {
    width: 950px;
    height: 950px;
  }

  @media (max-width: 1400px) {
    width: 870px;
    height: 870px;
  }

  @media (max-width: 1200px) {
    width: 600px;
    height: 600px;
  }

  @media (max-width: 768px) {
    width: 650px;
    height: 650px;
  }
`;

export const PlanetOrbit3 = styled.div`
  width: 1350px;
  height: 1350px;
  @media (max-width: 1700px) {
    width: 1250px;
    height: 1250px;
  }

  @media (max-width: 1400px) {
    width: 1150px;
    height: 1150px;
  }

  @media (max-width: 1200px) {
    width: 750px;
    height: 750px;
  }

  @media (max-width: 768px) {
    width: 800px;
    height: 800px;
  }
`;

export const PlanetOrbit4 = styled.div`
  width: 1650px;
  height: 1650px;
  @media (max-width: 1700px) {
    width: 1550px;
    height: 1550px;
  }

  @media (max-width: 1400px) {
    width: 1400px;
    height: 1400px;
  }

  @media (max-width: 1200px) {
    width: 900px;
    height: 900px;
  }

  @media (max-width: 768px) {
    width: 950px;
    height: 950px;
  }
`;

export const PlanetOrbit5 = styled.div`
  width: 2000px;
  height: 2000px;
  @media (max-width: 1700px) {
    width: 1900px;
    height: 1900px;
  }

  @media (max-width: 1400px) {
    width: 1700px;
    height: 1700px;
  }

  @media (max-width: 1200px) {
    width: 1050px;
    height: 1050px;
  }

  @media (max-width: 768px) {
    width: 1100px;
    height: 1100px;
  }
`;

export const PlanetOrbit6 = styled.div`
  width: 2400px;
  height: 2400px;
  @media (max-width: 1700px) {
    width: 2300px;
    height: 2300px;
  }

  @media (max-width: 1400px) {
    width: 1950px;
    height: 1950px;
  }

  @media (max-width: 1200px) {
    width: 1200px;
    height: 1200px;
  }

  @media (max-width: 768px) {
    width: 1250px;
    height: 1250px;
  }
`;

export const SunWrapper = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  right: 150px;
  bottom: 0px;
  z-index: 0;

  @media (max-width: 1700px) {
    right: 30px;
    bottom: -18px;
  }

  @media (max-width: 1560px) {
    right: -140px;
  }

  @media (max-width: 1560px) {
    right: -140px;
    width: 320px;
    height: 320px;
  }

  @media (max-width: 1200px){
    width: 240px;
    height: 240px;
    right: 135px;
    bottom: 90px;
  }

  @media (max-width: 768px){
    right: 135px;
    bottom: 100px;
  }

  @media (max-width: 650px){
    right: 100px;
  }

  @media (max-width: 600px){
    right: 30px;
    bottom: 160px;
  }

  @media (max-width: 480px) {
    right: -30px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  position: relative;

  @media (max-width: 1024px) {
    margin: 0 40px;
  }

  @media (max-width: 1200px) {
    max-width: 1000px;
  }

  @media (min-width: 1200px) {
    max-width: 1150px;
  }

  @media (max-width: 768px) {
    margin: 0 60px;
    padding: 20px 10px;
  }

  @media (max-width: 480px) {
    margin: 0 30px;
  }
`;

export const ByTulula = styled.a`
  position: absolute;
  width: 65px;
  height: 65px;
  background-image: url(${ByTululaIcon});
  background-size: cover;
  bottom: 11%;
  left: 21%;

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
  }

  @media (max-width: 480px) {
    bottom: 12%;
    left: 3%;
  }
`;
