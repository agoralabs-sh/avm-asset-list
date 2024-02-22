import { VStack } from '@chakra-ui/react';
import {
  decode as decodeBase64,
  encodeURLSafe as encodeBase64URLSafe,
} from '@stablelib/base64';
import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavigateFunction, useNavigate } from 'react-router-dom';

// components
import AssetSelect from '@app/components/AssetSelect';

// constants
import { ASSET_ROUTE, CHAIN_ROUTE, DEFAULT_GAP } from '@app/constants';

// features
import { setTitle } from '@app/features/system';

// types
import type { IAppThunkDispatch, IAsset } from '@app/types';

// utils
import createAssetList from '@app/utils/createAssetList';

const SearchPage: FC = () => {
  const dispatch: IAppThunkDispatch = useDispatch<IAppThunkDispatch>();
  const navigate: NavigateFunction = useNavigate();
  // misc
  const assets: IAsset[] = createAssetList();
  // handlers
  const handleAssetSelect = (value: IAsset) =>
    navigate(
      `/${CHAIN_ROUTE}/${encodeBase64URLSafe(decodeBase64(value.network.genesisHash))}/${ASSET_ROUTE}/${value.id}`
    );

  useEffect(() => {
    dispatch(setTitle(__APP_TITLE__));
  }, []);

  return (
    <VStack
      alignItems="center"
      justifyContent="flex-start"
      flexGrow={1}
      mt={DEFAULT_GAP}
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
