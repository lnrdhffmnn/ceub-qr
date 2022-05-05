import { Text } from "@chakra-ui/react";

function BottomInfo({ raCod }) {
  return (
    <Text
      position='absolute'
      bottom={5}
      fontSize='sm'
      fontFamily='monospace'
      letterSpacing={1}
    >
      {raCod}
    </Text>
  );
}

export default BottomInfo;