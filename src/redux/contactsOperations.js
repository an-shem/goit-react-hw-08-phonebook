import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from '../services/api';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, { rejectWithValue }) => {
    try {
      const allContacts = await contactsApi.getAllContacts();
      return allContacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const setContactApi = createAsyncThunk(
  'contacts/setContactApi',
  async (contactData, { rejectWithValue }) => {
    try {
      const newContact = await contactsApi.addContact(contactData);
      return newContact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContactApi = createAsyncThunk(
  'contacts/deleteContactApi',
  async (contactId, { rejectWithValue }) => {
    try {
      const idRemoteContact = await contactsApi.deleteContact(contactId);
      return idRemoteContact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
