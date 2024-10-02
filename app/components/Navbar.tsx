"use client";

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{marginBottom: 3}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Student Records App
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Students</Button>
        <Button color="inherit">About</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
