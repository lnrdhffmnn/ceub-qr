import React from 'react';
import { Heading, useColorModeValue } from '@chakra-ui/react';

function Header({ text }) {
  const textColor = useColorModeValue('purple.600', 'purple.300');

  return (
    <Heading
      color={textColor}
      position='absolute'
      top={8}
      left={8}
    >
      {text}
    </Heading>
  );
}

export default Header;