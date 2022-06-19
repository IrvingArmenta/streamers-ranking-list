import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'global-styles';
import StreamersEventPage from 'pages/StreamersEventPage';
import ThemeSwitcher from 'components/ThemeSwitcher';
import { checkLSAndSetTheme } from 'utils';

function App() {
  const [themeState, setThemeState] = useState(() => checkLSAndSetTheme());

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
