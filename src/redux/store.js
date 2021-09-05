import { configureStore, combineReducers } from '@reduxjs/toolkit';
import items from '../redux/sliceContacts';
import filter from '../redux/sliceFilter';
import error from '../redux/sliceError';
import authUser from '../redux/authUser/authUserSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'authUser',
  storage,
  whitelist: ['token'],
};

const persistedAuthUserReducer = persistReducer(persistConfig, authUser);

const contacts = combineReducers({
  items,
  filter,
  error,
});

export const store = configureStore({
  reducer: {
    contacts,
    authUser: persistedAuthUserReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
