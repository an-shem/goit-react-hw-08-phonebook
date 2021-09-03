import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'authUser/register',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axios
        .post('/users/signup', userData)
        .then(({ data }) => data);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logIn = createAsyncThunk(
  'authUser/logIn',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axios
        .post('/users/login', userData)
        .then(({ data }) => data);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logOut = createAsyncThunk(
  'authUser/logOut',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axios
        .post('/users/logout', userData)
        .then(({ data }) => data);
      token.unset();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
