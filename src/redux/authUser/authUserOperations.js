import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

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
      toast.success(`Hello, ${data.user.name}!`);
      return data;
    } catch (error) {
      toast.error(
        `Registration failed. Check the correctness of the entered data.`,
        {
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#f2f4f3',
          },
          iconTheme: {
            primary: '#713200',
            secondary: '#f2f4f3',
          },
        },
      );
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
      toast.success(`Hello, ${data.user.name}!`);
      return data;
    } catch (error) {
      toast.error(
        `Login failed. Check the correctness of the entered data. Or register.`,
        {
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#f2f4f3',
          },
          iconTheme: {
            primary: '#713200',
            secondary: '#f2f4f3',
          },
        },
      );
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

export const fetchCurrentUser = createAsyncThunk(
  'authUser/fetchCurrentUser',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.authUser.token;

    if (!persistedToken) return rejectWithValue();

    token.set(persistedToken);

    try {
      const data = await axios.get('/users/current').then(({ data }) => data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
