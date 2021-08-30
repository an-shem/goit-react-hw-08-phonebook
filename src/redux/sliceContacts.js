import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  setContactApi,
  deleteContactApi,
} from '../redux/contactsOperations';

const items = createSlice({
  name: 'items',
  initialState: [],
  extraReducers: {
    [fetchAllContacts.fulfilled]: (_, { payload }) => payload,
    [setContactApi.fulfilled]: (state, { payload }) => [...state, payload],
    [deleteContactApi.fulfilled]: (state, { payload }) =>
      state.filter(contact => contact.id !== payload),
  },
});

export default items.reducer;
