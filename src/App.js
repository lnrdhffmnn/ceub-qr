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
  const [ra, setRa] = useState('');
  const [codigo, setCodigo] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    let _ra = localStorage.getItem('ra');
    let _codigo = localStorage.getItem('cod');
    if (_ra) setRa(_ra);
    if (_codigo) setCodigo(_codigo)
  }, [])

  function closeModal(_ra, _codigo) {
    if (_ra) {
      setRa(_ra);
      localStorage.setItem('ra', _ra);
    } else {
      setRa('');
      localStorage.removeItem('ra');
    }

    if (_codigo) {
      setCodigo(_codigo);
      localStorage.setItem('cod', _codigo);
    } else {
      setCodigo('');
      localStorage.removeItem('cod');
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
      <SettingsModal
        isOpen={isOpen}
        onClose={onClose}
        onCloseSave={closeModal}
        curRa={ra}
        curCod={codigo}
      />
      {ra ?
        <Qr qrValue={`${ra}|${codigo}`} />
        :
        <NoQr onLinkClick={onOpen} />
      }
    </Flex>
  );
}

export default App;