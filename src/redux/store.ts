import { combineReducers, configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import tableReducer from './table/table';

const rootReducer = combineReducers({
  table: tableReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, Action>;

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});