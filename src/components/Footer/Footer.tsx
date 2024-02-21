import { HStack, Icon, Image, Link, Text, VStack } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { IoLogoGithub, IoOpenOutline } from 'react-icons/io5';

// constants
import {
  AGORA_LABS_WEBSITE_LINK,
  DEFAULT_GAP,
  GITHUB_LINK,
  KIBISIS_LINK,
  LICENSE_LINK,
} from '@app/constants';

// images
import bannerLogoImage from '@app/images/developed_by_agora_labs_banner.svg';

// theme
import { theme } from '@app/theme';

const Footer: FC = () => {
  const { t } = useTranslation();
  // hooks
  const defaultTextColor: string = theme.colors.whiteAlpha['800'];
  const primaryHoverColor: string = theme.colors.primary['300'];

  return (
    <VStack
      alignItems="center"
      bg={theme.colors.altBackground}
      px={DEFAULT_GAP * 2}
      py={DEFAULT_GAP * 2}
      spacing={DEFAULT_GAP + 2}
      w="full"
    >
      <HStack justifyContent="space-evenly" w="full">
        {/*developer section*/}
        <VStack alignItems="flex-start" spacing={DEFAULT_GAP / 2} w="full">
          {/*heading*/}
          <Text as="b" color={defaultTextColor} textAlign="left" w="full">
            {t('headings.developer')}
          </Text>

          <Link href={GITHUB_LINK} isExternal={true}>
            <Icon
              _hover={{
                color: primaryHoverColor,
              }}
              as={IoLogoGithub}
              color={defaultTextColor}
              h={8}
              transition="all 0.3s ease-out"
              w={8}
            />
          </Link>
        </VStack>

        {/*resources section*/}
        <VStack alignItems="flex-start" spacing={DEFAULT_GAP / 2} w="full">
          {/*heading*/}
          <Text as="b" color={defaultTextColor} textAlign="left" w="full">
            {t('headings.resources')}
          </Text>

          <Link
            _hover={{
              color: primaryHoverColor,
            }}
            color={defaultTextColor}
            href={KIBISIS_LINK}
            isExternal={true}
          >
            <HStack spacing={1} w="full">
              <Text transition="all 0.3s ease-out">
                {t('captions.kibisis')}
              </Text>

              <Icon as={IoOpenOutline} h={4} w={4} />
            </HStack>
          </Link>
        </VStack>
      </HStack>

      {/*developed by logo*/}
      <Link href={AGORA_LABS_WEBSITE_LINK} isExternal={true}>
        <Image h="50px" src={bannerLogoImage as string} w="206px" />
      </Link>

      {/*license*/}
      <Text color={defaultTextColor}>
        <Trans i18nKey="captions.support">
          Licensed under{' '}
          <Link color="primary.500" href={LICENSE_LINK} isExternal={true}>
            MIT
          </Link>
          {''}.
        </Trans>
      </Text>
    </VStack>
  );
};

export default Footer;
