import styled from 'styled-components/macro';
import backgroundMenu from '../../../assets/background_menu.png';

export const MobileMenuWrap = styled.div`
  .bm-burger-button {
    position: absolute;
    width: 34px;
    height: 28px;
    right: 30px;
    top: 25px;
  }

  @media (min-width: 480px){
    .bm-burger-button {
      right: 60px !important;
    }
  };

  .bm-burger-bars {
    background: #FFF;
    border-radius: 2px;
    height: 3px !important;
  }

  .bm-burger-bars-hover {
    background: #40BE46;
    opacity: 1 !important;
  }

  .bm-cross-button {
    height: 30px !important;
    width: 25px !important;
    right: 25px !important;
    top: 20px !important;
  }

  .bm-cross {
    background: #FFF;
    height: 20px !important;
  }

  .bm-menu-wrap {
    position: fixed;
    border-left: 1px solid;
    height: 120% ! important;
    top: 0;
    bottom: 0;
    background-image: url(${backgroundMenu});
    background-size: cover;
    background-position: center;
  }

  .bm-menu {
    padding: 90px 24px 0;
    font-size: 16px;
    line-height: 22px;
  }

  .bm-morph-shape {
    fill: #373a47;
  }

  .bm-item-list {
    color: #FFF;
    text-decoration: none;
  }

  .bm-item-list a{
    color: #FFF;
    text-decoration: none;
  }

  .bm-item {
    display: inline-block;
    border-bottom: 0.5px solid #FFF;
    padding: 16px 10px;
    transition: 0.1s all;
    outline: none;
  }

  .bm-item: hover {
    background: #40BE46;
  }

  .bm-overlay {
    height: 120% ! important;
    background: rgba(0, 0, 0, 0.3);
    left: 0;
    top: 0;
  }
`;
