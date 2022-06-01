import styled from 'styled-components/macro';
import { ReactComponent as Icon } from '../../assets/logo.svg';

export const Header = styled.div`
  display: flex;
  width: 100%;
  margin: 35px 0;
  justify-content: center;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 20px 0;
    background-color: #0D0922;
    margin: 0;
  }
`;

export const Logo = styled(Icon)`
  cursor: pointer;
  width: 54px;
  height: 54px;

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

export const LinksContainer = styled.ul`
  display: flex;
  margin: 0 20px;
  align-items: center;
  list-style: none;
  padding: 0;
`;

export const LinkItem = styled.li`
  margin: 0 10px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  min-width: 80px;
  position: relative;
  transition: width 2s linear;
  a {
    text-decoration: none;
    color: white;
  }

  &:hover {
    &:after {
      content: "";
      display: block;
      position: absolute;
      margin: 5px 0;
      height: 4px;
      width: 100%;
      opacity: 1;
      background-color:var(--green-color);
    }
  }
`;

export const LinkItemActive = styled.div`
  font-weight: 700;
  &:after {
    content: "";
    display: block;
    position: absolute;
    margin: 5px 0;
    height: 4px;
    width: 100%;
    background-color:var(--green-color);
  }
`;