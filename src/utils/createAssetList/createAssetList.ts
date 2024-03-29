// config
import { networks } from '@app/config';

// data
import voiTestAssets from '@app/data/voitest-v1/assets.json';

// enums
import { AssetTypeEnum } from '@app/enums';

// types
import type { IAsset, INetwork } from '@app/types';

export default function createAssetList(): IAsset[] {
  return [...voiTestAssets].reduce<IAsset[]>((acc, currentValue) => {
    const network: INetwork | null =
      networks.find(
        (value) => value.genesisHash === currentValue.genesisHash
      ) || null;

    if (
      !network ||
      !currentValue.id ||
      !currentValue.name ||
      !currentValue.symbol ||
      !currentValue.type
    ) {
      return acc;
    }

    return [
      ...acc,
      {
        iconURI: currentValue.iconURI ?? null,
        id: currentValue.id,
        name: currentValue.name,
        network,
        symbol: currentValue.symbol,
        type: currentValue.type as AssetTypeEnum,
      },
    ];
  }, []);
}
