import styled, { css } from 'styled-components/macro';
import { keyframes } from 'styled-components';

interface ModalContentProps {
  largeModal?: boolean;
  shouldModalClose?: boolean;
}

const modalAnimationBackground = keyframes`
  0% {
    background: rgba(0,0,0,0.0);
  }
  100% {
    background: rgba(11, 11, 11, 0.7);
  }
`;

const modalCloseAnimationBackground = keyframes`
  0% {
    background: rgba(11, 11, 11, 0.7);
  }
  100% {
    background: rgba(0,0,0,0.0);
  }
`;

export const Container = styled.div<ModalContentProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  z-index: 7;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(p) => p.theme.modalStyles.modalBackdrop};
  animation: ${modalAnimationBackground} 0.3s;
  ${(div) =>
    div.shouldModalClose &&
    css`
      animation: ${modalCloseAnimationBackground} 0.3s;
    `};
  animation-fill-mode: both;
`;

const modalAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

const modalCloseAnimation = keyframes`
  0% {
    opacity: 1;
    transform: none;
  }
  100% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`;

export const ModalContent = styled.div<ModalContentProps>`
  position: relative;
  border-radius: ${(p) => p.theme.modalStyles.borderRadius};
  background: ${(p) => p.theme.modalStyles.modalBackdrop};
  max-height: 100vh;
  max-height: calc(var(--vh, 1vh) * 100);
  animation: ${modalAnimation} 0.3s;
  z-index: 10;
  ${(p) =>
    p.shouldModalClose &&
    css`
      animation: ${modalCloseAnimation} 0.3s;
    `};
  animation-fill-mode: both;

  @media (min-width: 768px) {
    transition: width 0.3s ease;
  }
`;

export interface StyledContainerProps {
  isWithoutHeader?: number;
}

export const ModalBody = styled.div<StyledContainerProps>(
  ({ isWithoutHeader = false }) => `
  @media (max-width: 768px) {
    max-height: ${isWithoutHeader ? 'calc(100vh + 1px)' : 'calc(100vh - 65px)'};
    overflow-y: auto;
  }
`
);

export const ModalClose = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Modal = styled.div`
  height: 100%;
  width: 100%;
  border-radius: ${(p) => p.theme.modalStyles.borderRadius};
  outline: none;
  z-index: 100;
  @media (min-width: 768px) {
    width: auto;
  }
`;
