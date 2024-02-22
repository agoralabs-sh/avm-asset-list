import {
  Center,
  ColorModeContextType,
  Flex,
  HStack,
  IconButton,
  Spacer,
  Tooltip,
  useColorMode,
  VStack,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import {
  IoArrowBackOutline,
  IoMoonOutline,
  IoSunnyOutline,
} from 'react-icons/io5';
import {
  Location,
  NavigateFunction,
  useLocation,
  useNavigate,
} from 'react-router-dom';

// components
import Footer from '@app/components/Footer';

// constants
import {
  BODY_BACKGROUND_COLOR,
  DEFAULT_GAP,
  SEARCH_ROUTE,
} from '@app/constants';

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
  const { colorMode, toggleColorMode }: ColorModeContextType = useColorMode();
  const defaultTextColor: string = useDefaultTextColor();
  // handlers
  const handlerBackClick = () =>
    navigate(SEARCH_ROUTE, {
      replace: true,
    });
  const handlerColorChangeClick = () => toggleColorMode();

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Center as="main" backgroundColor={BODY_BACKGROUND_COLOR}>
        <Flex alignItems="center" justifyContent="center" minH="100vh" w="full">
          <VStack alignItems="center" minH="100vh" spacing={0} w="full">
            {/*header*/}
            <HStack
              alignItems="center"
              justifyContent="space-between"
              p={DEFAULT_GAP / 2}
              w="full"
            >
              {!location.pathname.includes(SEARCH_ROUTE) && (
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
              )}

              <Spacer />

              <Tooltip
                label={t('captions.switchColorMode', {
                  colorMode: colorMode === 'dark' ? 'light' : 'dark',
                })}
              >
                <IconButton
                  _hover={{ bg: buttonHoverBackgroundColor }}
                  aria-label="Change color mode"
                  color={defaultTextColor}
                  icon={
                    colorMode === 'dark' ? (
                      <IoSunnyOutline />
                    ) : (
                      <IoMoonOutline />
                    )
                  }
                  onClick={handlerColorChangeClick}
                  size="lg"
                  variant="ghost"
                />
              </Tooltip>
            </HStack>

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
