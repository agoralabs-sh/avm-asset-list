import { configureStore, Store, Reducer } from '@reduxjs/toolkit';

// types
import type { IAppState } from '@app/types';

export default function makeStore(
  reducer: Reducer<IAppState>
): Store<IAppState> {
  return configureStore({
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    reducer,
  });
}
