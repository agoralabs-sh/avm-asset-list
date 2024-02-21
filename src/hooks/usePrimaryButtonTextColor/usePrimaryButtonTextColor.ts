import { useColorModeValue } from '@chakra-ui/react';

export default function usePrimaryButtonTextColor(): string {
  return useColorModeValue('white', 'gray.800');
}
