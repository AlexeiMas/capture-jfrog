import styled from 'styled-components/macro';

export const Footer = styled.div`
  display: flex;
  bottom: 0;
  width: 100%;
  margin: 40px 0;

  // @media (max-width: 1200px) {
  //   max-height: 600px;
  //   right: -100px;
  //   bottom: 0px;
  // }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    line-height: 20px;
  }

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

export const FooterCompany = styled.div`
  color: white;
  font-size: 14px;
  margin: 0 15px;

  @media (max-width: 1200px) {
    margin: 0 5px;
  }

  @media (max-width: 1024px) {
    margin: 0 20px;
  }
`;

export const Container = styled.div`
  display: flex;  
  width: 100%;
  margin: 0 auto;
  position: absolute;
  bottom: 0;


  @media (max-width: 768px) {
    margin: 0 40px;
  }

  @media (max-width: 1024px) {
    margin: 0 30px;
  }

  @media (max-width: 1200px) {
    max-width: 1000px;
  }

  @media (min-width: 1200px) {
    max-width: 1150px;
  }
`;

