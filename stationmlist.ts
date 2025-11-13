'use client';

import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { Station } from '@/types';
import LigneBadge from '@/components/common/LigneBadge';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface StationListProps {
  stations: Station[];
}

export default function StationList({ stations }: StationListProps) {
  return (
    <Box sx={{ position: 'relative' }}>
      {/* Ligne verticale */}
      <Box
        sx={{
          position: 'absolute',
          left: '23px',
          top: '30px',
          bottom: '30px',
          width: '2px',
          backgroundColor: '#FFFFFF',
          zIndex: 0,
        }}
      />

      {stations.map((station, index) => (
        <Link
          key={station.id}
          href={`/gare/${station.id}`}
          style={{ textDecoration: 'none', display: 'block' }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              padding: '16px',
              paddingLeft: '16px',
              position: 'relative',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
              },
            }}
          >
            {/* Point de la station */}
            <Box
              sx={{
                width: 16,
                height: 16,
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                border: '3px solid #003399',
                flexShrink: 0,
                zIndex: 1,
                position: 'relative',
              }}
            />

            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#FFFFFF',
                }}
              >
                {station.name}
              </Typography>
              {station.subtitle && (
                <Typography
                  sx={{
                    fontSize: '13px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    marginTop: '2px',
                  }}
                >
                  {station.subtitle}
                </Typography>
              )}
            </Box>

            <KeyboardArrowRightIcon
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '24px',
              }}
            />
          </Box>

          {/* Correspondances */}
          {station.lignes.length > 1 && (
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                paddingLeft: '56px',
                paddingBottom: '8px',
                flexWrap: 'wrap',
              }}
            >
              {station.lignes.map((ligneNum) => (
                <LigneBadge
                  key={ligneNum}
                  number={ligneNum}
                  size="small"
                  type={ligneNum === 'D' ? 'rer' : 'metro'}
                />
              ))}
            </Box>
          )}
        </Link>
      ))}
    </Box>
  );
}
