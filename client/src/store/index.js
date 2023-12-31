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
