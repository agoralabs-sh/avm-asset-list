import { useSelector } from 'react-redux';

// types
import type { IAppState } from '@app/types';

export default function useSelectTitle(): string {
  return useSelector<IAppState, string>((state) => state.system.title);
}
