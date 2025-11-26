import * as MuiIcons from '@mui/icons-material';
import * as React from 'react';

// pomocna funkcija za kreiranje komponenti ikonica po imenu
const createIconComponent = (iconName) => {
  const IconComponent = MuiIcons[iconName];
  return IconComponent ? <IconComponent /> : <MuiIcons.HelpOutline />;
};
