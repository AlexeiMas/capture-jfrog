import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;  
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1200px) {
    max-width: 1000px;
  }

  @media (min-width: 1200px) {
    max-width: 1150px;
  }

  @media (min-width: 768px) {
    margin: 0 40px;
  }

  @media (max-width: 768px) {
    margin: 0 60px;
  }

  @media (max-width: 480px) {
    margin: 0 30px;
  }
`;
