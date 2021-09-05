import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  setContact,
  deleteContact,
} from '../redux/contactsOperations';

const items = createSlice({
  name: 'items',
  initialState: [],
  extraReducers: {
    [fetchAllContacts.fulfilled]: (_, { payload }) => payload,
    [setContact.fulfilled]: (state, { payload }) => [...state, payload],
    [deleteContact.fulfilled]: (state, { payload }) =>
      state.filter(contact => contact.id !== payload),
  },
});

export default items.reducer;
