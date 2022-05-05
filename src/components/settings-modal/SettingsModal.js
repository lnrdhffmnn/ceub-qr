import { useRef, useState } from 'react';
import { Button, FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, NumberInput, NumberInputField, useColorModeValue } from '@chakra-ui/react';
import { isMobile } from 'react-device-detect';
import { Decoder } from '@nuintun/qrcode';

function SettingsModal({ isOpen, onClose, onCloseSave, curRa, curCod }) {
  const [ra, setRa] = useState('');
  const [codigo, setCodigo] = useState('');

  const raInputRef = useRef();
  const fileInputRef = useRef();

  const inputBorderColor = useColorModeValue('purple.600', 'purple.300');

  const qrcode = new Decoder();

  async function handleFileInputChange(file) {
    let source = URL.createObjectURL(file);
    let sep = '|';

    try {
      let result = await qrcode.scan(source);
      let data = result.data;

      if (!data.includes(sep)) throw new Error('QR Code inválido');

      let [_ra, _cod] = data.split(sep);

      setRa(_ra);
      setCodigo(_cod);
    } catch (err) {
      alert(err.message || 'Não foi possível ler o código');
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef={raInputRef}
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
              value={ra}
              onChange={(t) => { setRa(t) }}
            >
              <NumberInputField placeholder={curRa} ref={raInputRef} />
            </NumberInput>
          </FormControl>
          <FormControl>
            <FormLabel>Código (opcional)</FormLabel>
            <NumberInput
              min={0}
              clampValueOnBlur={false}
              variant='outline'
              focusBorderColor={inputBorderColor}
              value={codigo}
              onChange={(t) => { setCodigo(t) }}
            >
              <NumberInputField placeholder={curCod} />
            </NumberInput>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Input
            type='file'
            display='none'
            accept='image/*'
            ref={fileInputRef}
            onChange={(e) => { handleFileInputChange(e.target.files[0]) }}
          />
          <HStack
            mb={2}
            gap={2}
            w='100%'
          >
            <Button
              colorScheme='purple'
              w='100%'
              onClick={() => { fileInputRef.current.click() }}
            >
              Ler QR Code
            </Button>
            <Button
              colorScheme='whatsapp'
              type='submit'
              w='100%'
              onClick={() => {
                onCloseSave(ra, codigo);
                setRa('');
                setCodigo('');
              }}
            >
              Salvar
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default SettingsModal;