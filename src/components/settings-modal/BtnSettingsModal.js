import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';

function BtnSettingsModal({ onClick }) {
  return (
    <IconButton
      icon={<SettingsIcon w={5} h={5} />}
      variant='ghost'
      onClick={onClick}
    />
  );
}

export default BtnSettingsModal;