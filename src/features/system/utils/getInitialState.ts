// utils
import createLogger from '@app/utils/createLogger';

// types
import { IState } from '../types';

export default function getInitialState(): IState {
  return {
    logger: createLogger(__ENV__ === 'development' ? 'debug' : 'error'),
    title: __APP_TITLE__,
  };
}
