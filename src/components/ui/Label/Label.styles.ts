import styled from 'styled-components';

interface ILabel {
  isBold?: boolean;
}

export const Label = styled.label<ILabel>`
  font-size: 0.9rem;
  ${(p) => p.isBold && 'font-weight: bold;'};
  color: ${(p) => p.theme.textColorDark};
  &.pointer {
    cursor: pointer;
    :hover {
      color: ${(p) => p.theme.primaryColour};
    }
  }
`;
