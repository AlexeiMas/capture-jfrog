import styled from 'styled-components/macro';
import background from '../../../assets/background.png';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  min-height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-color: #0C0A21;
  position: relative;
  overflow: hidden;
  background-attachment: fixed;
`;
