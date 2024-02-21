// constants
import { VOI_ICON_URI } from '@app/constants';

// enums
import { NetworkTypeEnum } from '@app/enums';

// types
import type { INetwork } from '@app/types';

const networks: INetwork[] = [
  /**
   * voi networks
   */
  {
    canonicalName: 'Voi',
    chakraTheme: 'voi',
    genesisId: 'voitest-v1',
    iconURI: VOI_ICON_URI,
    type: NetworkTypeEnum.Test,
  },
];

export default networks;
