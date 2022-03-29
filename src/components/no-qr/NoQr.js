import React from 'react';
import { Heading, Link, useColorModeValue } from '@chakra-ui/react';

function NoQr({ onLinkClick }) {
  const textColor = useColorModeValue('purple.600', 'purple.300');

  return (
    <Heading m={10}>
      Você precisa <Link color={textColor} onClick={onLinkClick}>preencher</Link> seus dados.
    </Heading>
  );
}

export default NoQr;