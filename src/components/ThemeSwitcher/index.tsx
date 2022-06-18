import { darkTheme, defaultTheme } from 'global-styles';
import React, { FC } from 'react';
import { DefaultTheme, useTheme } from 'styled-components';
import ThemeSwitcherStyled from './styles';

const ThemeSwitcher: FC<{
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
}> = (props) => {
  const { setTheme } = props;
  const theme = useTheme();

  return (
    <ThemeSwitcherStyled>
      <fieldset>
        <legend>Theme Switcher</legend>

        <div>
          <input
            type="radio"
            id="lightTheme"
            name="currentTheme"
            value="light"
            checked={theme.themeName === 'light'}
            onChange={() => setTheme(defaultTheme)}
          />
          <label htmlFor="lightTheme">Light</label>
        </div>

        <div>
          <input
            type="radio"
            id="darkTheme"
            name="currentTheme"
            value="dark"
            checked={theme.themeName === 'dark'}
            onChange={() => setTheme(darkTheme)}
          />
          <label htmlFor="darkTheme">Dark</label>
        </div>
      </fieldset>
    </ThemeSwitcherStyled>
  );
};

export default ThemeSwitcher;
