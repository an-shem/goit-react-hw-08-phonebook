import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  setContact,
  deleteContact,
} from './contactsOperations';

const error = createSlice({
  name: 'error',
  initialState: null,
  extraReducers: {
    [fetchAllContacts.rejected]: (_, { payload }) => payload,
    [setContact.rejected]: (_, { payload }) => payload,
    [deleteContact.rejected]: (_, { payload }) => payload,
    [fetchAllContacts.pending]: () => null,
    [setContact.pending]: () => null,
    [deleteContact.pending]: () => null,
  },
});

export default error.reducer;
