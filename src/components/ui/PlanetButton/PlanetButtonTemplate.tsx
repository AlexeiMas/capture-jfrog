import React from "react";
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { PlanetButton, LabelText } from './PlanetButton';
import { IPlanetTemplate } from './planets';

interface IPlanetButton {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  planetTemplate: IPlanetTemplate;
  isFilled?: boolean;
}

export const PlanetButtonTemplate: React.FC<IPlanetButton> = ({ onClick, planetTemplate, isFilled }) => {

  const { width } = useWindowDimensions();
  let positionCss: React.CSSProperties;
  if (width && width > 1200) {
    positionCss = planetTemplate.positionBig;
  } else if (width && width <= 1200 && width > 768) {
    positionCss = planetTemplate.positionMiddle;
  } else if (width && width <= 768 && width > 480) {
    positionCss = planetTemplate.positionSmall;
  } else if (width && width <= 480 && width > 430) {
    positionCss = planetTemplate.position480;
  } else if (width && width <= 430 && width > 370) {
    positionCss = planetTemplate.position430;
  } else {
    positionCss = planetTemplate.positionLittle;
  }

  return (
    <PlanetButton
      img={planetTemplate.img}
      imgHover={planetTemplate.imgHover}
      width={planetTemplate.width}
      height={planetTemplate.height}
      style={positionCss}
      onClick={onClick ? onClick : () => { }}
      isFilled={isFilled}
    >
      <img alt="planet_img" style={{ width: "100%" }} src={planetTemplate.img}></img>
      <LabelText>{planetTemplate.label}</LabelText>
    </PlanetButton>)
}