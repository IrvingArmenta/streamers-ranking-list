import { darkTheme, defaultTheme } from 'global-styles';
import React, { FC } from 'react';
import { DefaultTheme, useTheme } from 'styled-components';
import ThemeSwitcherStyled from './styles';

const themeChoices = ['light', 'dark'];

const ThemeSwitcher: FC<{
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
}> = (props) => {
  const { setTheme } = props;
  const styledTheme = useTheme();

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = e.target.value === 'light' ? defaultTheme : darkTheme;

    setTheme(selectedTheme);
    localStorage.setItem('streamers-ranking-list/theme', e.target.value);
  };

  return (
    <ThemeSwitcherStyled>
      <fieldset>
        <legend>Theme Switcher</legend>

        {themeChoices.map((themeName) => {
          const id = `${themeName}Theme`;
          return (
            <div key={id}>
              <input
                type="radio"
                id={id}
                name="currentTheme"
                value={themeName}
                checked={styledTheme.themeName === themeName}
                onChange={handleThemeChange}
              />
              <label htmlFor={id}>{themeName}</label>
            </div>
          );
        })}
      </fieldset>
    </ThemeSwitcherStyled>
  );
};

export default ThemeSwitcher;
