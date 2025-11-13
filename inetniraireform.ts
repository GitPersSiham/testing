'use client';

import { useState } from 'react';
import { Box, Button, TextField, IconButton } from '@mui/material';
import SwapVertIcon from '@mui/icons-material/SwapVert';

interface ItineraireFormProps {
  defaultDepart?: string;
  defaultArrivee?: string;
}

export default function ItineraireForm({ defaultDepart = '', defaultArrivee = '' }: ItineraireFormProps) {
  const [depart, setDepart] = useState(defaultDepart);
  const [arrivee, setArrivee] = useState(defaultArrivee);

  const handleSwap = () => {
    const temp = depart;
    setDepart(arrivee);
    setArrivee(temp);
  };

  const handleCalculer = () => {
    // Logique de calcul d'itinéraire
    console.log('Calcul itinéraire:', { depart, arrivee });
  };

  return (
    <Box
      sx={{
        padding: '24px',
        backgroundColor: '#003399',
      }}
    >
      <Box sx={{ marginBottom: '24px' }}>
        <Box sx={{ position: 'relative', marginBottom: '16px' }}>
          <TextField
            fullWidth
            placeholder="Saint-Denis – Pleyel"
            value={depart}
            onChange={(e) => setDepart(e.target.value)}
            InputProps={{
              startAdornment: (
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: '#FFFFFF',
                    marginRight: '12px',
                  }}
                />
              ),
              endAdornment: depart && (
                <IconButton
                  size="small"
                  onClick={() => setDepart('')}
                  sx={{ color: '#FFFFFF' }}
                >
                  ×
                </IconButton>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              right: '-50px',
              transform: 'translateY(-50%)',
            }}
          >
            <IconButton
              onClick={handleSwap}
              sx={{
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <SwapVertIcon />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ position: 'relative' }}>
          <TextField
            fullWidth
            placeholder="Arrivée"
            value={arrivee}
            onChange={(e) => setArrivee(e.target.value)}
            InputProps={{
              startAdornment: (
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    backgroundColor: 'transparent',
                    border: '2px solid #FFFFFF',
                    marginRight: '12px',
                  }}
                />
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'transparent',
                borderStyle: 'dashed',
              },
            }}
          />
        </Box>
      </Box>

      <Button
        fullWidth
        variant="contained"
        onClick={handleCalculer}
        sx={{
          backgroundColor: '#FFFFFF',
          color: '#003399',
          fontWeight: 600,
          fontSize: '16px',
          padding: '14px',
          borderRadius: '25px',
          '&:hover': {
            backgroundColor: '#E0E0E0',
          },
          '&:disabled': {
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            color: 'rgba(0, 51, 153, 0.5)',
          },
        }}
        disabled={!depart || !arrivee}
      >
        Calculer
      </Button>
    </Box>
  );
}
