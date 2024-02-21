import { Heading, VStack } from '@chakra-ui/react';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

// components
import AssetAvatar from '@app/components/AssetAvatar';
import AssetIcon from '@app/components/AssetIcon';
import PageSubHeading from '@app/components/PageSubHeading';

// constants
import PageTextItem from '@app/components/PageTextItem';

// hooks
import useDefaultTextColor from '@app/hooks/useDefaultTextColor';
import usePrimaryButtonTextColor from '@app/hooks/usePrimaryButtonTextColor';

// types
import type { IAsset } from '@app/types';

// utils
import createAssetList from '@app/utils/createAssetList';

const AssetPage: FC = () => {
  const { t } = useTranslation();
  const { assetID, genesisID } = useParams();
  // hooks
  const defaultTextColor: string = useDefaultTextColor();
  const primaryButtonTextColor: string = usePrimaryButtonTextColor();
  // misc
  const assets: IAsset[] = createAssetList();
  const asset: IAsset | null =
    assets.find(
      (value) => value.network.genesisId === genesisID && value.id === assetID
    ) || null;

  if (!asset) {
    return (
      <VStack alignItems="center" justifyContent="center" flexGrow={1} w="full">
        <Heading color={defaultTextColor} size="lg" textAlign="center" w="full">
          {t('headings.assetNotFound')}
        </Heading>
      </VStack>
    );
  }

  return (
    <VStack
      alignItems="center"
      justifyContent="flex-start"
      flexGrow={1}
      spacing={4}
      w="full"
    >
      {/*icon*/}
      <AssetAvatar
        asset={asset}
        fallbackIcon={
          <AssetIcon
            color={primaryButtonTextColor}
            networkTheme={asset.network.chakraTheme}
            h={20}
            w={20}
          />
        }
        size="xl"
      />

      {/*name*/}
      <Heading color={defaultTextColor} size="lg" textAlign="center" w="full">
        {asset.name}
      </Heading>

      {/*information*/}
      <VStack
        alignItems="flex-start"
        justifyContent="flex-start"
        spacing={0}
        w="full"
      >
        {/*heading*/}
        <PageSubHeading text={t('headings.information')} />

        {/*symbol*/}
        <PageTextItem label={t('labels.symbol')} value={asset.symbol} />
      </VStack>

      {/*actions*/}
      <VStack
        alignItems="flex-start"
        justifyContent="flex-start"
        spacing={0}
        w="full"
      >
        {/*heading*/}
        <PageSubHeading text={t('headings.actions')} />
      </VStack>
    </VStack>
  );
};

export default AssetPage;
