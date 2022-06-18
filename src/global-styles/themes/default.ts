import { DefaultTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
  themeName: 'light',
  colors: {
    main: '#dedede',
    primary: 'red',
    secondary: 'magenta',
    text: '#333',
  },
  neuphorm: {
    boxShadow: `9px 9px 33px #b2b2b2,
      -9px -9px 33px #ffffff;`,
    borderRadius: '12px',
    borderColor: '#d2d2d2',
  },
};

export default defaultTheme;
