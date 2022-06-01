import { createGlobalStyle } from 'styled-components';
import { ITheme } from './themes/interface';

interface GlobalStyleProps {
  theme: ITheme;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    font-family: ${(p: GlobalStyleProps) => p.theme.fontFamily};
    font-size: ${(p: GlobalStyleProps) => p.theme.fontSize};
    color: #fff;
    min-height: 100%;
    margin: 0;
  }

  :root {
    --green-color: ${(p: GlobalStyleProps) => p.theme.greenColor} 
  }
`;

export default GlobalStyle;
