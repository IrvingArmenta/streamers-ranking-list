import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, defaultTheme, GlobalStyle } from 'global-styles';
import StreamersEventPage from 'pages/StreamersEventPage';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <main className="App">
        <StreamersEventPage />
      </main>
    </ThemeProvider>
  );
}

export default App;
