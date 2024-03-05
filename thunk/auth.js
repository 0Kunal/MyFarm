import {createAsyncThunk} from '@reduxjs/toolkit';
import {getAxios} from '../helpers/axiosInterceptor';

export const register = createAsyncThunk(
  'auth/register',
  async (model, thunkApi) => {
    try {
      const res = await getAxios().post('/register', model);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  },
);

export const login = createAsyncThunk('auth/login', async (model, thunkApi) => {
  try {
    const res = await getAxios().post('/login', model);
    return res.data;
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});

export const sendOtp = createAsyncThunk(
  'auth/sendOtp',
  async (model, thunkApi) => {
    try {
      const res = await getAxios().post('/forgot-password', model);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  },
);

export const verifyOtp = createAsyncThunk(
  'auth/verifyOtp',
  async (model, thunkApi) => {
    try {
      const res = await getAxios().post('/verify-otp', model);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  },
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (model, thunkApi) => {
    try {
      const res = await getAxios().post('/reset-password', model);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  },
);
