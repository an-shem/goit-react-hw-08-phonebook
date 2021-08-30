import { configureStore, combineReducers } from '@reduxjs/toolkit';
import items from '../redux/sliceContacts';
import filter from '../redux/sliceFilter';
import error from '../redux/sliceError';

const contacts = combineReducers({
  items,
  filter,
  error,
});

export const store = configureStore({
  reducer: {
    contacts,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
