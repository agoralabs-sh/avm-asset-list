import { HStack, Icon, Spacer, Text, VStack } from '@chakra-ui/react';
import React, { FC, ReactEventHandler, useState } from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';

// components
import AssetAvatar from '@app/components/AssetAvatar';
import AssetTypeBadge from '@app/components/AssetTypeBadge';
import AssetIcon from '@app/components/AssetIcon';
import ChainBadge from '@app/components/ChainBadge';

// constants
import { BODY_BACKGROUND_COLOR, DEFAULT_GAP } from '@app/constants';
import { OPTION_HEIGHT } from './constants';

// hooks
import useButtonHoverBackgroundColor from '@app/hooks/useButtonHoverBackgroundColor';
import useDefaultTextColor from '@app/hooks/useDefaultTextColor';
import usePrimaryButtonTextColor from '@app/hooks/usePrimaryButtonTextColor';
import useSubTextColor from '@app/hooks/useSubTextColor';

// types
import type { IAsset } from '@app/types';

interface IProps {
  asset: IAsset;
  onClick?: ReactEventHandler<HTMLDivElement>;
}

const AssetSelectOption: FC<IProps> = ({ asset, onClick }: IProps) => {
  // hooks
  const buttonHoverBackgroundColor: string = useButtonHoverBackgroundColor();
  const defaultTextColor: string = useDefaultTextColor();
  const primaryButtonTextColor: string = usePrimaryButtonTextColor();
  const subTextColor: string = useSubTextColor();
  // state
  const [backgroundColor, setBackgroundColor] = useState<string>(
    BODY_BACKGROUND_COLOR
  );
  // handlers
  const handleMouseEnter = () => setBackgroundColor(buttonHoverBackgroundColor);
  const handleMouseLeave = () => setBackgroundColor(BODY_BACKGROUND_COLOR);

  return (
    <HStack
      alignItems="center"
      backgroundColor={backgroundColor}
      cursor="pointer"
      h={OPTION_HEIGHT}
      m={0}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      p={DEFAULT_GAP / 2}
      spacing={2}
      w="full"
    >
      {/*icon*/}
      <AssetAvatar
        asset={asset}
        fallbackIcon={
          <AssetIcon
            color={primaryButtonTextColor}
            networkTheme={asset.network.chakraTheme}
            h={6}
            w={6}
          />
        }
        size="xs"
      />

      {/*name/symbol*/}
      <VStack alignItems="flex-start" justifyContent="space-evenly" spacing={2}>
        <Text color={defaultTextColor} fontSize="sm" maxW={175} noOfLines={1}>
          {asset.name}
        </Text>

        <Text color={subTextColor} fontSize="xs">
          {asset.symbol}
        </Text>
      </VStack>

      <Spacer />

      {/*id/chain/type*/}
      <VStack alignItems="flex-end" justifyContent="space-evenly" spacing={2}>
        {/*chain*/}
        <ChainBadge network={asset.network} />

        <HStack spacing={1}>
          {/*type*/}
          <AssetTypeBadge type={asset.type} />

          {/*id*/}
          <Text color={subTextColor} fontSize="xs" maxW={175} noOfLines={1}>
            {asset.id}
          </Text>
        </HStack>
      </VStack>

      {/*right arrow icon*/}
      <Icon as={IoArrowForwardOutline} color={defaultTextColor} />
    </HStack>
  );
};

export default AssetSelectOption;
