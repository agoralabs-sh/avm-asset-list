import { Center, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

// components
import AVMIcon from '@app/components/AVMIcon';

// constants
import { BODY_BACKGROUND_COLOR } from '@app/constants';

// hooks
import useDefaultTextColor from '@app/hooks/useDefaultTextColor';

// selectors
import { useSelectTitle } from '@app/selectors';

// types
import type { IProps } from './types';

const Layout: FC<IProps> = ({ children }: IProps) => {
  const { t } = useTranslation();
  // selectors
  const title: string = useSelectTitle();
  // hooks
  const defaultTextColor: string = useDefaultTextColor();

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Center as="main" backgroundColor={BODY_BACKGROUND_COLOR}>
        <Flex alignItems="center" justifyContent="center" minH="100vh" w="full">
          <VStack
            alignItems="center"
            minH="100vh"
            pt={6}
            px={6}
            spacing={6}
            w="full"
          >
            {/*header*/}
            <VStack alignItems="center" spacing={6} w="full">
              {/*icon*/}
              <AVMIcon h={20} w={20} />

              {/*heading*/}
              <Heading
                color={defaultTextColor}
                size="lg"
                textAlign="center"
                w="full"
              >
                {t('headings.avmAssetList')}
              </Heading>

              {/*description*/}
              <Text
                color={defaultTextColor}
                size="md"
                textAlign="center"
                w="full"
              >
                {t('captions.description')}
              </Text>
            </VStack>

            {/*content*/}
            <VStack
              flexGrow={1}
              maxW="500px"
              spacing={0}
              style={{
                marginInlineStart: '0px',
              }}
              w="full"
            >
              {children}
            </VStack>
          </VStack>
        </Flex>
      </Center>
    </>
  );
};

export default Layout;
