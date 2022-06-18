import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    themeName: string;
    colors: {
      main: string;
      primary: string;
      secondary: string;
      text: string;
    };
    neuphorm: {
      borderRadius: string;
      boxShadow: string;
      borderColor: string;
    };
  }
}
