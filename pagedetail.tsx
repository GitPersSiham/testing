//detail d'une ligfne 


'use client';

import { Box, Typography } from '@mui/material';
import { useParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import StationList from '@/components/ligne/StationList';
import LigneBadge from '@/components/common/LigneBadge';
import { getLigneById } from '@/data/lignes';
import { notFound } from 'next/navigation';

export default function LignePage() {
  const params = useParams();
  const ligneId = params.id as string;
  const ligne = getLigneById(ligneId);

  if (!ligne) {
    notFound();
  }

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#003399' }}>
      <Header showBack />

      <Box sx={{ padding: '24px' }}>
        {/* En-tête de la ligne */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: '8px' }}>
          <LigneBadge number={ligne.number} size="large" />
          <Typography
            variant="h1"
            sx={{
              fontSize: '28px',
              fontWeight: 400,
            }}
          >
            {ligne.name}
          </Typography>
        </Box>
      </Box>

      {/* Liste des stations */}
      <Box sx={{ paddingTop: '16px' }}>
        <StationList stations={ligne.stations} />
      </Box>
    </Box>
  );
}
