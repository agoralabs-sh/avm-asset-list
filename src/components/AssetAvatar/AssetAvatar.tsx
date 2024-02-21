import { Avatar, AvatarProps } from '@chakra-ui/react';
import React, { FC, ReactElement, ReactNode } from 'react';

// theme
import { theme } from '@app/theme';

// types
import type { IAsset } from '@app/types';

// utils
import createIconFromDataUri from '@app/utils/createIconFromDataUri';

interface IProps extends AvatarProps {
  asset: IAsset;
  fallbackIcon: ReactElement;
}

const AssetAvatar: FC<IProps> = ({
  asset,
  fallbackIcon,
  ...avatarProps
}: IProps) => {
  // misc
  let props: AvatarProps = {
    ...avatarProps,
    bg: theme.colors.primary['500'],
    icon: fallbackIcon,
  };

  if (asset.iconURI) {
    if (asset.iconURI.includes('image/png')) {
      props = {
        ...avatarProps,
        src: asset.iconURI,
      };
    }

    if (asset.iconURI.includes('image/svg+xml')) {
      props = {
        ...avatarProps,
        icon: createIconFromDataUri(asset.iconURI) ?? fallbackIcon,
      };
    }
  }

  return <Avatar {...props} />;
};

export default AssetAvatar;
