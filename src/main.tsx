import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';


import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal, purple, grey, white } from '@mui/material/colors';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: teal[500]
    },
    secondary: {
      main: purple[500]
    },
    background: {
      default: grey[800],
      paper: grey[500]
    },
    text: {
      primary: teal[50]
    }
  }
});
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
