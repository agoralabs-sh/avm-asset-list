// types
import { IResourceLanguage } from '@app/types';

const translation: IResourceLanguage = {
  captions: {
    copyAppID: 'Copy app ID',
    copyID: 'Copy ID',
    description: `Provides a comprehensive list for assets across the AVM ecosystem, from testnets to mainnets.`,
    goBackToSearch: 'Go back to search',
    kibisis: 'Kibisis',
    scanQRCodeToAddToWallet:
      'Scan the QR code with a compatible wallet to add the asset.',
    license: 'Licensed under <2>MIT</2>.',
    switchColorMode: 'Switch to {{colorMode}} mode',
  },
  headings: {
    addToWallet: 'Add To Wallet',
    assetNotFound: 'Asset Not Found!',
    avmAssetList: 'AVM Asset List',
    developer: 'Developer',
    information: 'Information',
    resources: 'Resources',
  },
  labels: {
    appID: 'App ID',
    chain: 'Chain',
    id: 'ID',
    name: 'Name',
    symbol: 'Symbol',
    type: 'Type',
  },
  placeholders: {
    assetSelect: 'Select or search for an asset...',
  },
};

export default translation;
