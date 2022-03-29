import React, { useRef, useState } from 'react';
import { Button, FormControl, FormLabel, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, NumberInput, NumberInputField, useColorModeValue } from '@chakra-ui/react';
import { isMobile } from 'react-device-detect';

function SettingsModal({ isOpen, onClose, onCloseSave, curRa, curCod }) {
  const [ra, setRa] = useState('');
  const [codigo, setCodigo] = useState('');

  const inputFocus = useRef();

  const inputBorderColor = useColorModeValue('purple.600', 'purple.300');

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
          <FormControl mb={3}>
            <FormLabel>RA</FormLabel>
            <NumberInput
              min={0}
              variant='outline'
              focusBorderColor={inputBorderColor}
              onChange={(t) => { setRa(t) }}
            >
              <NumberInputField placeholder={curRa} ref={inputFocus} />
            </NumberInput>
          </FormControl>
          <FormControl>
            <FormLabel>Código (opcional)</FormLabel>
            <NumberInput
              min={0}
              variant='outline'
              focusBorderColor={inputBorderColor}
              onChange={(t) => { setCodigo(t) }}
            >
              <NumberInputField placeholder={curCod} />
            </NumberInput>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme='whatsapp'
            type='submit'
            w='100vh'
            mb={3}
            onClick={() => {
              onCloseSave(ra, codigo);
              setRa('');
              setCodigo('');
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