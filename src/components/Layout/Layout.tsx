import {
  Center,
  Flex,
  Heading,
  HStack,
  IconButton,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { IoArrowBackOutline } from 'react-icons/io5';
import {
  Location,
  NavigateFunction,
  useLocation,
  useNavigate,
} from 'react-router-dom';

// components
import AVMIcon from '@app/components/AVMIcon';

// constants
import { BODY_BACKGROUND_COLOR, SEARCH_ROUTE } from '@app/constants';

// hooks
import useButtonHoverBackgroundColor from '@app/hooks/useButtonHoverBackgroundColor';
import useDefaultTextColor from '@app/hooks/useDefaultTextColor';

// selectors
import { useSelectTitle } from '@app/selectors';

// types
import type { IProps } from './types';

const Layout: FC<IProps> = ({ children }: IProps) => {
  const { t } = useTranslation();
  const location: Location = useLocation();
  const navigate: NavigateFunction = useNavigate();
  // selectors
  const title: string = useSelectTitle();
  // hooks
  const buttonHoverBackgroundColor: string = useButtonHoverBackgroundColor();
  const defaultTextColor: string = useDefaultTextColor();
  // handlers
  const handlerBackClick = () =>
    navigate(SEARCH_ROUTE, {
      replace: true,
    });
  // renders
  const renderHeader = () => {
    if (location.pathname.includes(SEARCH_ROUTE)) {
      return (
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
          <Text color={defaultTextColor} size="md" textAlign="center" w="full">
            {t('captions.description')}
          </Text>
        </VStack>
      );
    }

    return (
      <HStack alignItems="flex-start" w="full">
        <Tooltip label={t('captions.goBackToSearch')}>
          <IconButton
            _hover={{ bg: buttonHoverBackgroundColor }}
            aria-label="Go back"
            color={defaultTextColor}
            icon={<IoArrowBackOutline />}
            onClick={handlerBackClick}
            size="lg"
            variant="ghost"
          />
        </Tooltip>
      </HStack>
    );
  };

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
            {renderHeader()}

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
