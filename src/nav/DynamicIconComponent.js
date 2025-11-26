import * as MuiIcons from '@mui/icons-material';
import * as React from 'react';

export const DynamicIconComponent = ({ iconName, ...props }) => {
  // Access the component from the MuiIcons object using bracket notation
  const Icon = MuiIcons[iconName];

  if (!Icon) {
    console.warn(`Icon "${iconName}" not found`);
    return null;
  }

  // Create the element dynamically
  return React.createElement(Icon, props, null);
};
