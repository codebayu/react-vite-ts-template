import React from 'react';
import { Box, IconButton, IconButtonProps } from '@mui/material';
import { icons } from '@constant';
import { CloseButtonSx as sx } from './styles';

export type CloseButtonProps = {
  size?: IconButtonProps['size'];
  onClick?: () => void;
};

export const CloseButton = ({ onClick, size = 'small' }: CloseButtonProps) => {
  return (
    <IconButton sx={sx.root} onClick={onClick} size={size}>
      <Box component={icons.X} sx={sx.icon} />
    </IconButton>
  );
};
