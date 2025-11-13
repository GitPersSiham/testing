'use client';

import { Box, Typography } from '@mui/material';
import { ligneColors } from '@/theme/theme';

interface LigneBadgeProps {
  number: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'metro' | 'rer' | 'tramway';
}

export default function LigneBadge({ number, size = 'medium', type = 'metro' }: LigneBadgeProps) {
  const colors = ligneColors[number] || { bg: '#666666', text: '#FFFFFF' };
  
  const sizeMap = {
    small: { width: 28, height: 28, fontSize: '12px', iconSize: 16 },
    medium: { width: 36, height: 36, fontSize: '16px', iconSize: 20 },
    large: { width: 44, height: 44, fontSize: '18px', iconSize: 24 },
  };

  const dimensions = sizeMap[size];

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0.5,
      }}
    >
      {type === 'metro' && (
        <Box
          sx={{
            width: dimensions.iconSize,
            height: dimensions.iconSize,
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Typography
            sx={{
              color: '#003399',
              fontSize: dimensions.fontSize,
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            M
          </Typography>
        </Box>
      )}
      
      {type === 'rer' && (
        <Box
          sx={{
            minWidth: dimensions.width,
            height: dimensions.height,
            borderRadius: '4px',
            backgroundColor: colors.bg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 8px',
            border: `2px solid ${colors.bg}`,
          }}
        >
          <Typography
            sx={{
              color: colors.text,
              fontSize: dimensions.fontSize,
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            RER
          </Typography>
        </Box>
      )}
      
      <Box
        sx={{
          minWidth: dimensions.width,
          height: dimensions.height,
          borderRadius: type === 'rer' ? '4px' : '50%',
          backgroundColor: colors.bg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: type === 'rer' ? '0 8px' : 0,
        }}
      >
        <Typography
          sx={{
            color: colors.text,
            fontSize: dimensions.fontSize,
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          {number}
        </Typography>
      </Box>
    </Box>
  );
}
