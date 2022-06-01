import styled from 'styled-components';

import { ReactComponent as Light } from '@assets/loaderLight.svg';
import { ReactComponent as Dark } from '@assets/loaderDark.svg';

interface ILoader {
  variant?: string;
  size?: string;
}

const getIconSize = (size: any): string => {
  if (size === 'big') return '50px';
  return '18px';
};

export const LoaderLight = styled(Light)<ILoader>`
  height: ${(p) => getIconSize(p.size)};
  width: ${(p) => getIconSize(p.size)};
`;

export const LoaderDark = styled(Dark)<ILoader>`
  height: ${(p) => getIconSize(p.size)};
  width: ${(p) => getIconSize(p.size)};
`;
