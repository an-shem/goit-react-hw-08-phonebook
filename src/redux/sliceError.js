import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  setContactApi,
  deleteContactApi,
} from './contactsOperations';

const error = createSlice({
  name: 'error',
  initialState: null,
  extraReducers: {
    [fetchAllContacts.rejected]: (_, { payload }) => payload,
    [setContactApi.rejected]: (_, { payload }) => payload,
    [deleteContactApi.rejected]: (_, { payload }) => payload,
    [fetchAllContacts.pending]: () => null,
    [setContactApi.pending]: () => null,
    [deleteContactApi.pending]: () => null,
  },
});

export default error.reducer;
