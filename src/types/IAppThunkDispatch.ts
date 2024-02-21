import { Action, ThunkDispatch } from '@reduxjs/toolkit';

// types
import type IAppState from './IAppState';

type IAppThunkDispatch = ThunkDispatch<IAppState, unknown, Action>;

export default IAppThunkDispatch;
