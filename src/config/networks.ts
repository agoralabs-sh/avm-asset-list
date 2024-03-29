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
    genesisHash: 'IXnoWtviVVJW5LGivNFc0Dq14V3kqaXuK2u5OQrdVZo=',
    iconURI: VOI_ICON_URI,
    type: NetworkTypeEnum.Test,
  },
];

export default networks;
