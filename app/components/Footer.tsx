"use client";

import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        width: "65%",
        backgroundColor: '#f5f5f5',
        padding: '1rem',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" color="textSecondary">
        Developed by IT21060694 - Anusara Weerasooriya
      </Typography>
    </Box>
  );
};

export default Footer;
