'use client';
//page d'acceuil
import { Box, Button, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '@/components/layout/Header';
import LigneCard from '@/components/ligne/LigneCard';
import { lignes } from '@/data/lignes';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'lignes' | 'simuler'>('lignes');

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#003399' }}>
      <Header />

      {/* Onglets */}
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          padding: '16px',
        }}
      >
        <Button
          fullWidth
          variant={activeTab === 'lignes' ? 'contained' : 'outlined'}
          onClick={() => setActiveTab('lignes')}
          sx={{
            borderRadius: '25px',
            padding: '12px',
            fontSize: '16px',
            fontWeight: 500,
          }}
        >
          Lignes
        </Button>
        <Button
          fullWidth
          variant={activeTab === 'simuler' ? 'contained' : 'outlined'}
          onClick={() => setActiveTab('simuler')}
          sx={{
            borderRadius: '25px',
            padding: '12px',
            fontSize: '16px',
            fontWeight: 500,
          }}
        >
          🚇 Simuler un trajet
        </Button>
      </Box>

      {/* Contenu */}
      <Box sx={{ padding: '0 16px' }}>
        <Accordion
          defaultExpanded
          sx={{
            backgroundColor: 'transparent',
            boxShadow: 'none',
            '&:before': {
              display: 'none',
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#FFFFFF' }} />}
            sx={{
              padding: '16px 0',
              minHeight: 'auto',
              '& .MuiAccordionSummary-content': {
                margin: 0,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#FFFFFF',
              }}
            >
              Explorer les lignes et les gares
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
            <Box sx={{ marginTop: '8px' }}>
              {lignes.map((ligne) => (
                <LigneCard key={ligne.id} ligne={ligne} />
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
