import type { Metadata } from 'next';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '@/theme/theme';
import { Box } from '@mui/material';

export const metadata: Metadata = {
  title: 'Grand Paris Express',
  description: 'Application web du Grand Paris Express',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: 0 }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
              minHeight: '100vh',
              backgroundColor: '#003399',
              color: '#FFFFFF',
            }}
          >
            {children}
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
