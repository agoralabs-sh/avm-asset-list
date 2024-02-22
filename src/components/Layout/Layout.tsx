import { Center, Flex, VStack } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

// components
import Footer from '@app/components/Footer';
import Header from '@app/components/Header';

// constants
import { BODY_BACKGROUND_COLOR, DEFAULT_GAP } from '@app/constants';

// selectors
import { useSelectTitle } from '@app/selectors';

// types
import type { IProps } from './types';

const Layout: FC<IProps> = ({ children }: IProps) => {
  // selectors
  const title: string = useSelectTitle();

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Center as="main" backgroundColor={BODY_BACKGROUND_COLOR}>
        <Flex alignItems="center" justifyContent="center" minH="100vh" w="full">
          <VStack alignItems="center" minH="100vh" spacing={0} w="full">
            {/*header*/}
            <Header />

            {/*content*/}
            <VStack
              flexGrow={1}
              maxW="500px"
              pb={DEFAULT_GAP * 2}
              px={DEFAULT_GAP}
              spacing={0}
              style={{
                marginInlineStart: '0px',
              }}
              w="full"
            >
              {children}
            </VStack>

            {/*footer*/}
            <Footer />
          </VStack>
        </Flex>
      </Center>
    </>
  );
};

export default Layout;
