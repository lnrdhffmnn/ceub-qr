import React, { useRef, useState } from 'react';
import { Button, FormControl, FormLabel, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, NumberInput, NumberInputField } from '@chakra-ui/react';
import { isMobile } from 'react-device-detect';

function SettingsModal({ isOpen, onClose }) {
  const [ra, setRa] = useState('');

  const inputFocus = useRef();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef={inputFocus}
      isCentered
      {...isMobile ? { size: 'full' } : {}}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Configurações</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>RA</FormLabel>
            <NumberInput min={0} variant='outline' onChange={(t) => { setRa(t) }}>
              <NumberInputField ref={inputFocus} />
            </NumberInput>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme='whatsapp'
            type='submit'
            w='100vh'
            onClick={() => {
              onClose(ra);
              setRa('');
            }}
          >
            Salvar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default SettingsModal;