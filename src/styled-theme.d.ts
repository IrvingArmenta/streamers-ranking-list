import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      primary: string;
      secondary: string;
    };
    neuphorm: {
      borderRadius: string;
      boxShadow: string;
    };
  }
}
