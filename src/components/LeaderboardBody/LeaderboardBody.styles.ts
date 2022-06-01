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

export const LeaderboardBodyWrapper = styled.div`
  height: 100%;
  margin: 15px 0;

  @media (min-width: 1600px) {
    max-width: 860px;
  }

  @media (max-width: 1600px) {
    max-width: 750px;
  }

  @media (max-width: 1200px) {
    max-width: 580px;
  }

  @media (max-width: 900px) {
    max-width: 450px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 45px;
  }
`;

export const LargeText = styled.h1`
  font-size: 70px;
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

  @media (max-width: 480px) {
    font-size: 33px;
    line-height: 44px;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 710px;
`;


export const LeaderboardSearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 10px;
  position: relative;
  height: 48px;
  width: 460px;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    margin: 15px 0;
  }
`;

export const LeaderboardSearchInput = styled.input`
  width: 100%;
  font-size: 16px;
  border-radius: 24px;
  padding: 13px 0;
  padding-left: 55px;
  background: transparent;
  border: 1.5px solid #FFF;
  color: #FFF;

  &:focus {
    border: 2px solid #FFF;
    outline: none;
  }
`;

export const LeaderboardSearchInputIconWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#41CF48, #2AB231);
  border-radius: 50%;
  position: absolute;
  margin: 0 4px;
  width: 41px;
  height: 41px;
  transition: 0.1s all;
  cursor: pointer;
  color: #FFF;
  &:hover {
    background: linear-gradient(#DEFFE0, #ACFFB0); 
    color: #40BE46;
  }

  &:active {
    background: linear-gradient(#FFF, #FFF); 
    color: #40BE46;
  }
`;

export const LeaderboardSearchInputIcon = styled.img`
  width: 24px;
  height: 20px;
`;
