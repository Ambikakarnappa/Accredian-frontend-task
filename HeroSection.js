import React, { useState } from 'react';
import { Button } from '@mui/material'; // Use MUI components
import ReferralFormModal from './ReferralFormModal'; // Ensure this path is correct

function HeroSection() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <h1>Welcome to Refer & Earn</h1>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Refer Now
      </Button>
      <ReferralFormModal open={open} onClose={handleClose} />
    </div>
  );
}

export default HeroSection;
