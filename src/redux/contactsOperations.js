import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, { rejectWithValue }) => {
    try {
      const allContacts = await axios.get('/contacts').then(({ data }) => data);
      return allContacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const setContact = createAsyncThunk(
  'contacts/setContact',
  async (contactData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contactData);
      toast.success('Contact added successfully.');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const { status } = await axios.delete(`/contacts/${contactId}`);

      if (status === 200) {
        toast.success('Contact successfully deleted.');
        return contactId;
      }

      return rejectWithValue();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
