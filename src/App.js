import { useEffect, useState } from 'react';
import { Flex, useDisclosure } from '@chakra-ui/react';
import Qr from './components/qr/Qr';
import NoQr from './components/no-qr/NoQr';
import ButtonStack from './components/button-stack/ButtonStack';
import ColorSwitcher from './components/color-switcher/ColorSwitcher';
import Header from './components/header/Header';
import BtnSettingsModal from './components/settings-modal/BtnSettingsModal';
import SettingsModal from './components/settings-modal/SettingsModal';
import BottomInfo from './components/bottom-info/BottomInfo';

function App() {
  const [ra, setRa] = useState('');
  const [codigo, setCodigo] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    getLocalData();
  }, []);

  function getLocalData() {
    let _ra = localStorage.getItem('ra') || null;
    let _codigo = localStorage.getItem('cod') || null;
    setRa(_ra);
    setCodigo(_codigo);
  }

  function getRaCod() {
    return `${ra || ''}|${codigo || ''}`
  }

  function closeModal() {
    getLocalData();
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
      />
      {ra ?
        <>
          <Qr qrValue={getRaCod()} />
          <BottomInfo raCod={getRaCod()} />
        </>
        :
        <NoQr onLinkClick={onOpen} />
      }
    </Flex>
  );
}

export default App;