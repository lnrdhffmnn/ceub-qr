import React, { useEffect, useState } from 'react';
import { Flex, useDisclosure } from '@chakra-ui/react';
import Qr from './components/qr/Qr';
import NoQr from './components/no-qr/NoQr';
import ButtonStack from './components/button-stack/ButtonStack';
import ColorSwitcher from './components/color-switcher/ColorSwitcher';
import Header from './components/header/Header';
import BtnSettingsModal from './components/settings-modal/BtnSettingsModal';
import SettingsModal from './components/settings-modal/SettingsModal';

function App() {
  const [qrValue, setQrValue] = useState();

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    let ra = localStorage.getItem('ra');
    if (ra) {
      setQrValue(ra);
    }
  }, [])

  function closeModal(ra) {
    if (ra) {
      setQrValue(ra);
      localStorage.setItem('ra', ra);
    } else {
      setQrValue(null);
      localStorage.removeItem('ra');
    }
    onClose();
  }

  return (
    <Flex direction='column' alignItems='center' justifyContent='center' p={10} h='100vh'>
      <Header text='CEUB' />
      <ButtonStack>
        <ColorSwitcher />
        <BtnSettingsModal onClick={onOpen} />
      </ButtonStack>
      <SettingsModal isOpen={isOpen} onClose={closeModal} />
      {qrValue ?
        <Qr qrValue={`${qrValue}|`} />
        :
        <NoQr />
      }
    </Flex>
  );
}

export default App;