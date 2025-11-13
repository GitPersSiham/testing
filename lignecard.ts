'use client';

import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import LigneBadge from '@/components/common/LigneBadge';
import { Ligne } from '@/types';

interface LigneCardProps {
  ligne: Ligne;
}

export default function LigneCard({ ligne }: LigneCardProps) {
  return (
    <Link
      href={`/ligne/${ligne.id}`}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          padding: '16px',
          backgroundColor: 'transparent',
          borderRadius: 0,
          cursor: 'pointer',
          transition: 'background-color 0.2s',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
          },
        }}
      >
        <LigneBadge number={ligne.number} size="medium" />
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: 500,
            color: '#FFFFFF',
          }}
        >
          {ligne.name}
        </Typography>
      </Box>
    </Link>
  );
}
