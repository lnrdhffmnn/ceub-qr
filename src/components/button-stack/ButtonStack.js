import { Stack } from '@chakra-ui/react';

function ButtonStack({ children }) {
  return (
    <Stack
      position='absolute'
      top={8}
      right={8}
    >
      {children}
    </Stack>
  );
}

export default ButtonStack;