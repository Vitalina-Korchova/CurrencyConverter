import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { currencyApi } from "./currency/currency.api";
import currencyReducer from "./currency/currency.slice";

const rootReducer = combineReducers({
  [currencyApi.reducerPath]: currencyApi.reducer,
  currency: currencyReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(currencyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
