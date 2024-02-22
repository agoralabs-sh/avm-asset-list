import { Heading, Text, VStack } from '@chakra-ui/react';
import {
  decode as decodeBase64,
  encodeURLSafe as encodeBase64URLSafe,
} from '@stablelib/base64';
import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { NavigateFunction, useNavigate } from 'react-router-dom';

// components
import AssetSelect from '@app/components/AssetSelect';
import AVMIcon from '@app/components/AVMIcon';

// constants
import { ASSET_ROUTE, CHAIN_ROUTE, DEFAULT_GAP } from '@app/constants';

// features
import { setTitle } from '@app/features/system';

// hooks
import useDefaultTextColor from '@app/hooks/useDefaultTextColor';

// types
import type { IAppThunkDispatch, IAsset } from '@app/types';

// utils
import createAssetList from '@app/utils/createAssetList';

const SearchPage: FC = () => {
  const { t } = useTranslation();
  const dispatch: IAppThunkDispatch = useDispatch<IAppThunkDispatch>();
  const navigate: NavigateFunction = useNavigate();
  // hooks
  const defaultTextColor: string = useDefaultTextColor();
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
      spacing={DEFAULT_GAP * 2}
      w="full"
    >
      <VStack alignItems="center" spacing={DEFAULT_GAP} w="full">
        {/*icon*/}
        <AVMIcon h={20} w={20} />

        {/*heading*/}
        <Heading color={defaultTextColor} size="lg" textAlign="center" w="full">
          {t('headings.avmAssetList')}
        </Heading>

        {/*description*/}
        <Text color={defaultTextColor} size="md" textAlign="center" w="full">
          {t('captions.description')}
        </Text>
      </VStack>

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
