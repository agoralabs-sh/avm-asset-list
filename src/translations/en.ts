// types
import { IResourceLanguage } from '@app/types';

const translation: IResourceLanguage = {
  captions: {
    copyAppID: 'Copy app ID',
    copyID: 'Copy ID',
    description: `Provides a comprehensive list for assets across the AVM ecosystem, from testnets to mainnets.`,
    goBackToSearch: 'Go back to search',
    scanQRCodeToAddToWallet:
      'Scan the QR code with a compatible wallet to add the asset.',
  },
  headings: {
    addToWallet: 'Add To Wallet',
    assetNotFound: 'Asset Not Found!',
    avmAssetList: 'AVM Asset List',
    information: 'Information',
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
