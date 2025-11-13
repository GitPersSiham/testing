'use client';

import { Box, Typography } from '@mui/material';
import { useParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import GareInfo from '@/components/gare/GareInfo';
import ItineraireForm from '@/components/gare/ItineraireForm';
import { getStationById } from '@/data/lignes';
import { notFound } from 'next/navigation';

export default function GarePage() {
  const params = useParams();
  const gareId = params.id as string;
  const station = getStationById(gareId);

  if (!station) {
    notFound();
  }

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#003399' }}>
      <Header showBack />

      {/* Informations de la gare */}
      <GareInfo station={station} />

      {/* Section Itinéraires */}
      <Box sx={{ marginTop: '32px' }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: '20px',
            fontWeight: 600,
            padding: '0 24px',
            marginBottom: '16px',
          }}
        >
          Itinéraires
        </Typography>

        <ItineraireForm defaultDepart={station.name} />
      </Box>
    </Box>
  );
}
