import styled from 'styled-components/macro';

export const ModalFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px -15px 0 -15px;
  border-top: 1px solid ${(p) => p.theme.defaultTheme.borderColor};
  padding: 15px 10px 0 10px;
  @media (max-width: 768px) {
    background: ${(p) => p.theme.defaultTheme.backgroundColorGrey};
    padding: 15px 10px;
    margin: 20px -15px 0 -15px;
  }
  @media (min-width: 768px) {
    margin: 20px -15px 0 0;
    padding: 15px 0 0 0;
  }
  button {
    width: 100%;
    :not(:first-child) {
      margin-left: 15px;
    }
    @media (min-width: 768px) {
      width: unset;
      :last-child {
        margin-right: 15px;
      }
    }
  }
`;

export const ModalFooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media (min-width: 768px) {
    justify-content: flex-end;
    width: 100%;
  }
`;
