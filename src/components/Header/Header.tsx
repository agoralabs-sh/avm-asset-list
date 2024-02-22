import {
  ColorModeContextType,
  HStack,
  IconButton,
  Spacer,
  Tooltip,
  useColorMode,
} from '@chakra-ui/react';
import React, { FC } from 'react';
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

// constants
import { DEFAULT_GAP, SEARCH_ROUTE } from '@app/constants';

// hooks
import useButtonHoverBackgroundColor from '@app/hooks/useButtonHoverBackgroundColor';
import useDefaultTextColor from '@app/hooks/useDefaultTextColor';

const Header: FC = () => {
  const { t } = useTranslation();
  const location: Location = useLocation();
  const navigate: NavigateFunction = useNavigate();
  // hooks
  const buttonHoverBackgroundColor: string = useButtonHoverBackgroundColor();
  const defaultTextColor: string = useDefaultTextColor();
  const { colorMode, toggleColorMode }: ColorModeContextType = useColorMode();
  // handlers
  const handlerBackClick = () =>
    navigate(SEARCH_ROUTE, {
      replace: true,
    });
  const handlerColorChangeClick = () => toggleColorMode();

  return (
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
          icon={colorMode === 'dark' ? <IoSunnyOutline /> : <IoMoonOutline />}
          onClick={handlerColorChangeClick}
          size="lg"
          variant="ghost"
        />
      </Tooltip>
    </HStack>
  );
};

export default Header;
