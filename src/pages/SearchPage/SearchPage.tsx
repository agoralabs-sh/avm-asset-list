import { VStack } from '@chakra-ui/react';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { NavigateFunction, useNavigate } from 'react-router-dom';

// components
import AssetSelect from '@app/components/AssetSelect';

// constants
import { ASSET_ROUTE, CHAIN_ROUTE } from '@app/constants';

// types
import type { IAsset } from '@app/types';

// utils
import createAssetList from '@app/utils/createAssetList';

const SearchPage: FC = () => {
  const { t } = useTranslation();
  const navigate: NavigateFunction = useNavigate();
  // misc
  const assets: IAsset[] = createAssetList();
  // handlers
  const handleAssetSelect = (value: IAsset) =>
    navigate(
      `/${CHAIN_ROUTE}/${value.network.genesisId}/${ASSET_ROUTE}/${value.id}`
    );

  return (
    <VStack
      alignItems="center"
      justifyContent="flex-start"
      flexGrow={1}
      w="full"
    >
      {/*asset select*/}
      <AssetSelect
        assets={assets}
        onAssetChange={handleAssetSelect}
        width="100%"
      />
    </VStack>
  );
};

export default SearchPage;
