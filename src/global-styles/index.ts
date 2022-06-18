import { createGlobalStyle } from 'styled-components';
import dark from './themes/dark';
import defaults from './themes/default';

export const GlobalStyle = createGlobalStyle`
    // box-sizing reset
    html {
        *, *::after, *::before {
            box-sizing: border-box;
        }
    }
    
    body {
        font-family: 'Roboto', -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        background-color: ${(p) => p.theme.colors.main};
        margin: 0;
    }
  

    // custom global styling
    h1, h2, h3, h4 {
        margin-top: 0;
    }
`;

export const darkTheme = dark;
export const defaultTheme = defaults;
