// enums
import { NetworkTypeEnum } from '@app/enums';

interface INetwork {
  canonicalName: string;
  chakraTheme: string;
  iconURI: string;
  genesisHash: string;
  type: NetworkTypeEnum;
}

export default INetwork;
