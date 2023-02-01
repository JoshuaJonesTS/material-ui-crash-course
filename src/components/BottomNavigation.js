import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';

export default function SimpleBottomNavigation() {
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <Box sx={{ width: 500 }}>
            <BottomNavigation/>
        </Box>
    </Paper>
  );
}
