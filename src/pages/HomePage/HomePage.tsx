import { Text, VStack } from '@chakra-ui/react';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const HomePage: FC = () => {
  const { t } = useTranslation();

  return (
    <VStack
      alignItems="center"
      justifyContent="flex-start"
      flexGrow={1}
      w="full"
    >
      <Text>{t('captions.helloHumie')}</Text>
    </VStack>
  );
};

export default HomePage;
