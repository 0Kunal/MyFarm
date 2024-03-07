import {createAsyncThunk} from '@reduxjs/toolkit';
import {getAxios} from '../helpers/axiosInterceptor';

const isDevlopment = false;

export const register = createAsyncThunk(
  'auth/register',
  async (model, thunkApi) => {
    if (isDevlopment) return {success: true};

    try {
      const res = await getAxios().post('/register', model);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  },
);

export const login = createAsyncThunk(
  'auth/log-in',
  async (model, thunkApi) => {
    if (isDevlopment) return {success: true};
    try {
      const res = await getAxios().post('/login', model);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  },
);

export const sendOtp = createAsyncThunk(
  'auth/sendOtp',
  async (model, thunkApi) => {
    if (isDevlopment) return {success: true};
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
    if (isDevlopment) return {success: true};
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
    if (isDevlopment) return {success: true};
    try {
      const res = await getAxios().post('/reset-password', model);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  },
);
