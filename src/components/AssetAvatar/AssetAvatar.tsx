import { Avatar, AvatarProps } from '@chakra-ui/react';
import React, { FC, ReactElement } from 'react';

// types
import type { IAsset } from '@app/types';

// utils
import createIconFromDataUri from '@app/utils/createIconFromDataUri';
import { theme } from '@app/theme';

interface IProps extends AvatarProps {
  asset: IAsset;
  fallbackIcon?: ReactElement;
}

const AssetAvatar: FC<IProps> = ({
  asset,
  fallbackIcon,
  ...avatarProps
}: IProps) => {
  // misc
  const icon: ReactElement | null = asset.iconURI
    ? createIconFromDataUri(asset.iconURI)
    : null;
  const props: AvatarProps = {
    ...avatarProps,
    ...(icon
      ? {
          icon,
        }
      : {
          bg: theme.colors.primary['500'],
          icon: fallbackIcon,
        }),
  };

  return <Avatar {...props} />;
};

export default AssetAvatar;
