import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, defaultTheme, GlobalStyle } from 'global-styles';
import StreamersEventPage from 'pages/StreamersEventPage';
import ThemeSwitcher from 'components/ThemeSwitcher';

function App() {
  // TODO - localStorage setup
  const [themeState, setThemeState] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? darkTheme
      : defaultTheme
  );

  return (
    <ThemeProvider theme={themeState}>
      <GlobalStyle />
      <main className="App">
        <StreamersEventPage />
        <ThemeSwitcher setTheme={setThemeState} />
      </main>
    </ThemeProvider>
  );
}

export default App;
