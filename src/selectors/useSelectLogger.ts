import { useSelector } from 'react-redux';

// types
import type { IAppState, ILogger } from '@app/types';

export default function useSelectLogger(): ILogger {
  return useSelector<IAppState, ILogger>((state) => state.system.logger);
}
