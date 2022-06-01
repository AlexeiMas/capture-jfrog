import styled from 'styled-components/macro';

interface ButtonProps {
  isFilled?: boolean;
  width: string;
  height: string;
  img: string;
  imgHover: string;
}

export const PlanetButton = styled.button<ButtonProps>`
  position: absolute;
  width: ${(p) => !p.isFilled ? p.width : "80px"}};
  height: ${(p) => !p.isFilled ? p.height : "100px"}};
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;
  outline: none;
  transition: .1s all;
  background: transparent;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(p) => p.imgHover});
  transform: translateX(-50%) translateY(-50%);
  color: #FFF !important;
  filter: grayscale(${(p) => !p.isFilled ? 1 : 0});
  img {
    transition: .2s all;
    opacity: 1;
  }
  &:hover {
    color: #40BE46 !important;
    filter: grayscale(0);
    img {
      opacity: 0;
    }
  }

  &:active {
    img {
      opacity: ${(p) => !p.isFilled ? "1" : "0"};
    }

    @media (max-width: 1200px){
      max-width: ${(p) => !p.isFilled ? "85px" : "65px"};
      max-height: ${(p) => !p.isFilled ? "85px" : "65px"};
    }
  
    @media (max-width: 768px) {
      max-width: ${(p) => !p.isFilled ? "70px" : "50px"};
      max-height: ${(p) => !p.isFilled ? "70px" : "50px"};
    }
  
    @media (max-width: 480px) {
      max-width: ${(p) => !p.isFilled ? "50px" : "38px"};
      max-height: ${(p) => !p.isFilled ? "50px" : "38px"};
    }
  }

  @media (max-width: 1200px){
    max-width: ${(p) => !p.isFilled ? "85px" : "65px"};
    max-height: ${(p) => !p.isFilled ? "85px" : "65px"};
  }

  @media (max-width: 768px) {
    max-width: ${(p) => !p.isFilled ? "70px" : "50px"};
    max-height: ${(p) => !p.isFilled ? "70px" : "50px"};
  }

  @media (max-width: 480px) {
    max-width: ${(p) => !p.isFilled ? "50px" : "38px"};
    max-height: ${(p) => !p.isFilled ? "50px" : "38px"};
  }
`;

export const LabelText = styled.span`
  position: absolute;
  font-size: 16px;
  font-weight: 700;
  bottom: -25px;
  text-transform: uppercase;
  width: 180px;

  @media (max-width: 1200px) {
    font-size: 14px;
    bottom: -20px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    bottom: -15px;
    width: 130px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    bottom: -15px;
    width: 115px;
  }
`;
