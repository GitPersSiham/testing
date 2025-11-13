'use client';

import { Box, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  showBack?: boolean;
  title?: string;
}

export default function Header({ showBack = false, title }: HeaderProps) {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px',
        backgroundColor: '#003399',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {showBack && (
          <IconButton
            onClick={() => router.back()}
            sx={{
              backgroundColor: '#FFFFFF',
              color: '#003399',
              padding: '8px 16px',
              borderRadius: '20px',
              '&:hover': {
                backgroundColor: '#E0E0E0',
              },
            }}
          >
            <ArrowBackIcon sx={{ fontSize: '18px', marginRight: '4px' }} />
            <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
              Retour
            </Typography>
          </IconButton>
        )}
      </Box>

      <Box sx={{ textAlign: 'right' }}>
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: 700,
            lineHeight: 1.2,
            textAlign: 'right',
          }}
        >
          Grand Paris
        </Typography>
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: 700,
            lineHeight: 1.2,
            textAlign: 'right',
          }}
        >
          express
        </Typography>
        <Typography
          sx={{
            fontSize: '9px',
            fontStyle: 'italic',
            marginTop: '2px',
            textAlign: 'right',
          }}
        >
          piloté par
        </Typography>
        <Typography
          sx={{
            fontSize: '9px',
            fontWeight: 500,
            textAlign: 'right',
          }}
        >
          Société des Grands Projets
        </Typography>
      </Box>
    </Box>
  );
}
