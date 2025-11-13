'use client';

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#003399',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFFFFF',
    },
    background: {
      default: '#003399',
      paper: '#003399',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", "Roboto", "Arial", sans-serif',
    h1: {
      fontSize: '1.5rem',
      fontWeight: 400,
      color: '#FFFFFF',
    },
    h2: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#FFFFFF',
    },
    body1: {
      fontSize: '1rem',
      color: '#FFFFFF',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#FFFFFF',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '25px',
          padding: '12px 24px',
          fontSize: '1rem',
        },
        outlined: {
          borderColor: '#FFFFFF',
          color: '#FFFFFF',
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        },
        contained: {
          backgroundColor: '#FFFFFF',
          color: '#003399',
          '&:hover': {
            backgroundColor: '#E0E0E0',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#003399',
          borderRadius: '12px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            color: '#FFFFFF',
            backgroundColor: 'transparent',
            borderRadius: '25px',
            '& fieldset': {
              borderColor: '#FFFFFF',
              borderWidth: '2px',
            },
            '&:hover fieldset': {
              borderColor: '#FFFFFF',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FFFFFF',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#FFFFFF',
          },
        },
      },
    },
  },
});

export const ligneColors: Record<string, { bg: string; text: string }> = {
  '14': { bg: '#62259D', text: '#FFFFFF' },
  '15': { bg: '#C04191', text: '#FFFFFF' },
  '16': { bg: '#FF7E2E', text: '#FFFFFF' },
  '17': { bg: '#FFD400', text: '#000000' },
  '18': { bg: '#00A88F', text: '#FFFFFF' },
  'D': { bg: '#00A88F', text: '#FFFFFF' },
};
