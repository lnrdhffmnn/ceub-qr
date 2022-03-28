import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import Qr from './components/qr/Qr';
import NoQr from './components/no-qr/NoQr';
import ButtonStack from './components/button-stack/ButtonStack';
import ColorSwitcher from './components/color-switcher/ColorSwitcher';
import Header from './components/header/Header';

function App() {
  const [qrValue, setQrValue] = useState();

  return (
    <Flex direction='column' alignItems='center' justifyContent='center' p={10} h='100vh'>
      <ButtonStack>
        <ColorSwitcher />
      </ButtonStack>
      <Header text='CEUB' />
      {qrValue ?
        <Qr qrValue={qrValue} />
        :
        <NoQr />
      }
    </Flex>
  );
}

export default App;