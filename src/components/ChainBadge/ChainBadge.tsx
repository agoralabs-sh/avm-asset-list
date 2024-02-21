import {
  ColorModeContextType,
  HStack,
  Tag,
  TagLabel,
  useColorMode,
} from '@chakra-ui/react';
import React, { FC } from 'react';

// enums
import { NetworkTypeEnum } from '@app/enums';

// types
import type { IProps } from './types';

// utils
import createIconFromDataUri from '@app/utils/createIconFromDataUri';

const ChainBadge: FC<IProps> = ({ network, size = 'sm' }: IProps) => {
  const { colorMode }: ColorModeContextType = useColorMode();

  const renderChainTag = () => (
    <Tag
      colorScheme={network.chakraTheme}
      size={size}
      variant={colorMode === 'dark' ? 'solid' : 'outline'}
    >
      {createIconFromDataUri(network.iconURI, {
        color: network.chakraTheme,
        h: 3,
        mr: 2,
        w: 3,
      })}
      <TagLabel>{network.canonicalName}</TagLabel>
    </Tag>
  );

  switch (network.type) {
    case NetworkTypeEnum.Beta:
      return (
        <HStack alignItems="center" justifyContent="flex-start" spacing={1}>
          {renderChainTag()}
          <Tag
            colorScheme="blue"
            size={size}
            variant={colorMode === 'dark' ? 'solid' : 'subtle'}
          >
            <TagLabel>BetaNet</TagLabel>
          </Tag>
        </HStack>
      );
    case NetworkTypeEnum.Test:
      return (
        <HStack alignItems="center" justifyContent="flex-start" spacing={1}>
          {renderChainTag()}
          <Tag
            colorScheme="yellow"
            size={size}
            variant={colorMode === 'dark' ? 'solid' : 'subtle'}
          >
            <TagLabel>TestNet</TagLabel>
          </Tag>
        </HStack>
      );
    case NetworkTypeEnum.Stable:
    default:
      return renderChainTag();
  }
};

export default ChainBadge;
