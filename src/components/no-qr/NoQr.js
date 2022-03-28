import React from 'react';
import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';

function NoQr() {
  const flexBgColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <Flex
      direction='column'
      alignItems='center'
      justifyContent='center'
      p={10}
      rounded={10}
      bg={flexBgColor}
    >
      <Heading>Você precisa preencher seus dados.</Heading>
    </Flex>
  );
}

export default NoQr;