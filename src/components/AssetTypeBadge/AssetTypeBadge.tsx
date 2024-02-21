import {
  ColorModeContextType,
  Tag,
  TagLabel,
  useColorMode,
} from '@chakra-ui/react';
import React, { FC } from 'react';

// enums
import { AssetTypeEnum } from '@app/enums';

// types
import type { IProps } from './types';

const AssetTypeBadge: FC<IProps> = ({ size = 'sm', type }: IProps) => {
  // hooks
  const { colorMode }: ColorModeContextType = useColorMode();

  switch (type) {
    case AssetTypeEnum.ARC0200:
    default:
      return (
        <Tag
          colorScheme="green"
          size={size}
          variant={colorMode === 'dark' ? 'solid' : 'subtle'}
        >
          <TagLabel>ARC200</TagLabel>
        </Tag>
      );
  }
};

export default AssetTypeBadge;
