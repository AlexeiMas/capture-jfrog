import styled from 'styled-components/macro';

export const LinksContainer = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 1024px) {
    line-height: 20px;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 20px;
  }
`;

export const LinkItem = styled.li`
  margin: 0 15px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  min-width: 80px;
  position: relative;
  transition: width 2s linear;
  a {
    text-decoration: none;
    color: white;
  }

  @media (max-width: 1200px) {
    margin: 0 5px;
  }
`;

export const LinkItemActive = styled.div`
  font-weight: 700;
`;

export const FooterCompany = styled.span`
  color: white;
  font-size: 14px;
`;

export const LinksBorder = styled.div`
  width: 1px;
  background-color: #fff;
  height: 18px;
`;
