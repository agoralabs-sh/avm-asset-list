// types
import { AssetTypeEnum, GenesisIDEnum } from '@app/enums';

interface IAsset {
  genesisID: GenesisIDEnum;
  iconURI: string | null;
  name: string;
  symbol: string;
  type: AssetTypeEnum;
}

export default IAsset;
