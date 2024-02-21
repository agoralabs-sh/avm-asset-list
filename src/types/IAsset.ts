// enums
import { AssetTypeEnum } from '@app/enums';

// types
import type INetwork from './INetwork';

interface IAsset {
  id: string;
  iconURI: string | null;
  name: string;
  network: INetwork;
  symbol: string;
  type: AssetTypeEnum;
}

export default IAsset;
