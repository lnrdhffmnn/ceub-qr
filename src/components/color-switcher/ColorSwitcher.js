import React from 'react';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function ColorSwitcher() {
  const { toggleColorMode } = useColorMode();

  const btnIcon = useColorModeValue(<SunIcon color='orange' w={5} h={5} />, <MoonIcon w={5} h={5} />);

  return (
    <IconButton
      icon={btnIcon}
      variant='ghost'
      onClick={toggleColorMode}
    />
  );
}

export default ColorSwitcher;