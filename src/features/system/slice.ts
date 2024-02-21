import { createSlice, Draft, PayloadAction, Reducer } from '@reduxjs/toolkit';

// enums
import { StoreNameEnum } from '@app/enums';

// types
import type { ILogger } from '@app/types';
import type { IState } from './types';

// utils
import { getInitialState } from './utils';

const slice = createSlice({
  initialState: getInitialState(),
  name: StoreNameEnum.System,
  reducers: {
    setLogger: (state: Draft<IState>, action: PayloadAction<ILogger>) => {
      state.logger = action.payload;
    },
    setTitle: (state: Draft<IState>, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

export const reducer: Reducer = slice.reducer;
export const { setLogger, setTitle } = slice.actions;
