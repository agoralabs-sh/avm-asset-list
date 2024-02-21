import {
  Box,
  Code,
  Heading,
  HStack,
  Spinner,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  decodeURLSafe as decodeBase64URLSafe,
  encode as encodeBase64,
} from '@stablelib/base64';
import { toCanvas } from 'qrcode';
import React, {
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

// components
import AssetAvatar from '@app/components/AssetAvatar';
import AssetIcon from '@app/components/AssetIcon';
import AssetTypeBadge from '@app/components/AssetTypeBadge';
import ChainBadge from '@app/components/ChainBadge';
import CopyIconButton from '@app/components/CopyIconButton';
import PageItem from '@app/components/PageItem';
import PageSubHeading from '@app/components/PageSubHeading';
import PageTextItem from '@app/components/PageTextItem';

// constants
import { KIBISIS_ICON_URI } from '@app/constants';

// enums
import { AssetTypeEnum } from '@app/enums';

// features
import { setTitle } from '@app/features/system';

// hooks
import useDefaultTextColor from '@app/hooks/useDefaultTextColor';
import usePrimaryButtonTextColor from '@app/hooks/usePrimaryButtonTextColor';

// selectors
import { useSelectLogger } from '@app/selectors';

// theme
import { theme } from '@app/theme';

// types
import type { IAppThunkDispatch, IAsset, ILogger } from '@app/types';

// utils
import createAssetList from '@app/utils/createAssetList';
import convertAssetToAssetAddURI from '@app/utils/convertAssetToAssetAddURI';

const AssetPage: FC = () => {
  const qrCodeRef: MutableRefObject<HTMLCanvasElement | null> =
    useRef<HTMLCanvasElement | null>(null);
  const { t } = useTranslation();
  const dispatch: IAppThunkDispatch = useDispatch<IAppThunkDispatch>();
  const { assetID, genesisHash } = useParams();
  // selectors
  const logger: ILogger = useSelectLogger();
  // hooks
  const defaultTextColor: string = useDefaultTextColor();
  const primaryButtonTextColor: string = usePrimaryButtonTextColor();
  // state
  const [asset, setAsset] = useState<IAsset | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  // misc
  const assets: IAsset[] = createAssetList();
  const qrCodeSize: number = 400;
  // renders
  const renderIDItem = (_asset: IAsset) => {
    let label: string = t('labels.id');
    let tooltipLabel: string = t('captions.copyID');

    switch (_asset.type) {
      case AssetTypeEnum.ARC0200:
        label = t('labels.appID');
        tooltipLabel = t('captions.copyAppID');

        break;
      default:
        break;
    }

    return (
      <PageItem
        label={label}
        value={
          <HStack spacing={1}>
            <Code borderRadius="md" fontSize="sm" wordBreak="break-word">
              {_asset.id}
            </Code>

            {/*copy button*/}
            <CopyIconButton
              ariaLabel={tooltipLabel}
              tooltipLabel={tooltipLabel}
              value={_asset.id}
            />
          </HStack>
        }
      />
    );
  };

  useEffect(() => {
    let _asset: IAsset | null;

    if (assetID && genesisHash) {
      _asset =
        assets.find(
          (value) =>
            value.network.genesisHash ===
              encodeBase64(decodeBase64URLSafe(genesisHash)) &&
            value.id === assetID
        ) || null;

      setAsset(_asset);

      if (_asset) {
        // set the page title
        dispatch(
          setTitle(`${_asset.symbol} | ${_asset.id} | ${__APP_TITLE__}`)
        );
      }
    }
  }, [assetID, genesisHash]);
  useEffect(() => {
    const _functionName: string = 'useEffect([asset, qrCodeRef])';

    if (asset && qrCodeRef.current) {
      setLoading(true);

      toCanvas(
        qrCodeRef.current,
        convertAssetToAssetAddURI(asset),
        { width: qrCodeSize },
        (renderError) => {
          let context: CanvasRenderingContext2D;
          let canvasCentre: number;
          let imageDrawCoords: number;
          let logoImage: HTMLImageElement;
          let logoSize: number;

          if (renderError) {
            logger.error(`${AssetPage.name}#${_functionName}:`, renderError);

            setError(true);

            return;
          }

          canvasCentre = qrCodeSize / 2;
          logoSize = qrCodeSize * 0.16;
          imageDrawCoords = canvasCentre - logoSize / 2;
          logoImage = new Image(logoSize, logoSize);
          logoImage.src = KIBISIS_ICON_URI;
          logoImage.crossOrigin = 'anonymous';

          try {
            context = qrCodeRef.current?.getContext('2d');
            context.drawImage(
              logoImage,
              imageDrawCoords,
              imageDrawCoords,
              logoSize,
              logoSize
            );
          } catch (error) {
            logger.error(`${AssetPage.name}#${_functionName}:`, error);

            setError(true);
          }

          setLoading(false);
        }
      );
    }
  }, [asset, qrCodeRef]);

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

        {/*id*/}
        {renderIDItem(asset)}

        {/*type*/}
        <PageItem
          label={t('labels.type')}
          value={<AssetTypeBadge type={asset.type} />}
        />

        {/*chain/network*/}
        <PageItem
          label={t('labels.chain')}
          value={<ChainBadge network={asset.network} />}
        />
      </VStack>

      {/*actions*/}
      <VStack
        alignItems="center"
        justifyContent="flex-start"
        spacing={2}
        w="full"
      >
        {/*heading*/}
        <PageSubHeading text={t('headings.addToWallet')} />

        {/*description*/}
        <Text
          color={defaultTextColor}
          fontSize="sm"
          textAlign="center"
          w="full"
        >
          {t('captions.scanQRCodeToAddToWallet')}
        </Text>

        {/*qr code*/}
        <Box position="relative">
          {loading && (
            <Stack
              alignItems="center"
              h={qrCodeSize}
              justifyContent="center"
              position="absolute"
              w={qrCodeSize}
            >
              <Spinner
                color={theme.colors.primary['500']}
                emptyColor={defaultTextColor}
                size="sm"
                speed="0.65s"
                thickness="1px"
              />
            </Stack>
          )}

          <canvas ref={qrCodeRef} />
        </Box>
      </VStack>
    </VStack>
  );
};

export default AssetPage;
