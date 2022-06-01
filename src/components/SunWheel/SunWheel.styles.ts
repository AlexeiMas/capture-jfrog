import styled from 'styled-components';
import { keyframes } from 'styled-components';
import headerBanner from '../../assets/sun.svg';

export const SunWheelWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Sun = styled.div`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  background-image: url(${headerBanner});
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 0px 150px 15px #ffeb53;
`;

const sunAnimation = (position: number, radius: number) => keyframes`
  from { 
    transform: rotate(${position}deg) translate(${radius}px) rotate(-${position}deg);
  }
  to   { 
    transform: rotate(${position + 360}deg) translate(${radius}px) rotate(${(position * -1) - 360}deg);
  }
`;

interface PlanetProps {
  position: number;
  logo: string;
  isActive: boolean;
}

export const Planet = styled.button <PlanetProps>`
  width: 80px;
  height: 30px;
  position: absolute;
  top: 42%;
  left: 37%;
  background: transparent;
  background-image: url(${(props) => props.logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  animation: ${(props) => sunAnimation(props.position, 280)} 120s linear infinite;
  box-sizing: border-box;
  opacity: ${(props) => props.isActive ? 1 : 0.4};

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    width: 65px;
    height: 20px;
    animation: ${(props) => sunAnimation(props.position, 180)} 120s linear infinite;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 15px;
    animation: ${(props) => sunAnimation(props.position, 170)} 120s linear infinite;
  }

  @media (max-width: 480px) {
    width: 55px;
    height: 20px;
    animation: ${(props) => sunAnimation(props.position, 185)} 120s linear infinite;
  }
`;
