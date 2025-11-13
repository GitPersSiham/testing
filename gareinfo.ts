'use client';

import { Box, Button, Typography } from '@mui/material';
import { Station } from '@/types';
import LigneBadge from '@/components/common/LigneBadge';

interface GareInfoProps {
  station: Station;
}

export default function GareInfo({ station }: GareInfoProps) {
  return (
    <Box sx={{ padding: '24px' }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: '24px',
          fontWeight: 400,
          marginBottom: '16px',
        }}
      >
        {station.name}
      </Typography>

      <Typography
        sx={{
          fontSize: '15px',
          lineHeight: 1.6,
          marginBottom: '24px',
          color: 'rgba(255, 255, 255, 0.9)',
        }}
      >
        Au cœur d'un projet urbain majeur, la gare emblématique {station.name} est un pôle unique de correspondance entre quatre lignes du Grand Paris Express.
      </Typography>

      {/* Correspondances */}
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          marginBottom: '24px',
          flexWrap: 'wrap',
        }}
      >
        {station.lignes.map((ligneNum) => (
          <LigneBadge
            key={ligneNum}
            number={ligneNum}
            size="medium"
            type={ligneNum === 'D' ? 'rer' : 'metro'}
          />
        ))}
      </Box>

      <Button
        fullWidth
        variant="outlined"
        sx={{
          borderRadius: '25px',
          padding: '12px',
          fontSize: '16px',
          fontWeight: 500,
        }}
      >
        Voir la page gare
      </Button>
    </Box>
  );
}
