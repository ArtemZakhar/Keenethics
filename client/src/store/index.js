import { configureStore } from '@reduxjs/toolkit';
import bicycles from '../components/slices/BicycleSlice';

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === 'string') {
    return next({
      type: action,
    });
  }
  return next(action);
};

const store = configureStore({
  reducer: { bicycles },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

 */ export const store = configureStore({
  reducer: {
    auth: persistedUserReducer,
    boards: boardsReducer,
    columns: ColumnsReducer,
    cards: CardsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['token', 'refreshToken'],
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    auth: persistedUserReducer,
    boards: boardsReducer,
    columns: ColumnsReducer,
    cards: CardsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERS  */
