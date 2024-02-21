// enums
import { NetworkTypeEnum } from '@app/enums';

interface INetwork {
  canonicalName: string;
  chakraTheme: string;
  iconURI: string;
  genesisId: string;
  type: NetworkTypeEnum;
}

export default INetwork;
