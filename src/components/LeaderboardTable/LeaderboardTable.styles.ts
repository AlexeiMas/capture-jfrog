import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  cursor: pointer;
  user-select: none;
`;

export const LeaderboardBodyTable = styled.div`
  font-size: 24px;

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const LeaderboardBodyItemHead = styled.div`
  display: flex;
  border: none;
  color: #40BE46; 
  font-weight: 700;
  padding: 15px 0;
  padding-right: 5px
`;

export const LeaderboardBodyItem = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #FFF;

  &:hover {
    background: linear-gradient(#41CF48, #2AB231);
  }
`;

export const LeaderboardBodyItemMedalGold = styled.div`
  border-radius: 50%;
  background-color: #FFE921;
  width: 24px;
  height: 24px;
  margin: 0 15px;
  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const LeaderboardBodyItemMedalSilver = styled.div`
  border-radius: 50%;
  background-color: #AFCFD1;
  width: 24px;
  height: 24px;
  margin: 0 15px;
  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const LeaderboardBodyItemMedalBronze = styled.div`
  border-radius: 50%;
  background-color: #FFAE34;
  width: 24px;
  height: 24px;
  margin: 0 15px;

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const LeaderboardBodyColumnRank = styled.div`
  display: flex;
  align-items: center;
  width: 15%;

  @media (max-width: 768px) {
    width: 20%;
  }
`;

export const LeaderboardBodyColumnName = styled.div`
  display: flex;
  align-items: center;
  width: 35%;

  @media (max-width: 768px) {
    width: 40%;
  }
`;

export const LeaderboardBodyColumnScore = styled.div`
  display: flex;
  align-items: center;
  width: 25%;

  @media (max-width: 768px) {
    width: 20%;
  }
`;

export const LeaderboardBodyColumnTime = styled.div`
  display: flex;
  align-items: center;
  width: 25%;

  @media (max-width: 768px) {
    width: 20%;
  }
`;