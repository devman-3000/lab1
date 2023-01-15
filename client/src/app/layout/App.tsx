import React, { useState } from 'react';
import Catalog from '../../features/catalog/Catalog';
import { CssBaseline, Container } from '@mui/material';
import Header from './Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const paletteType = isDarkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: isDarkMode ? '#121212' : '#eaeaea'
      }
    }
  });
  const handleChange = () => {
    setIsDarkMode(!isDarkMode);
}

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Header isDarkMode={isDarkMode} handleChange={handleChange} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
    
  );
}

export default App;
