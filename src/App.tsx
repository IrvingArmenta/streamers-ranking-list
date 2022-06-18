import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, defaultTheme, GlobalStyle } from 'global-styles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <main className="App">
        <div>home</div>
      </main>
    </ThemeProvider>
  );
}

export default App;
