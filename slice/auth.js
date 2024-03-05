import {createSlice} from '@reduxjs/toolkit';
import {
  register,
  login,
  sendOtp,
  verifyOtp,
  resetPassword,
} from '../thunk/auth';

const initialState = {
  loading: false,
};

const authSlice = createSlice({
  name: 'authSlice',
  reducers: {
    // saves all data in the state
    saveData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },

    // resets the state to initial state
    logout: (state, action) => {
      return initialState;
    },
  },
  initialState,
  extraReducers: builder => {
    // Register
    builder.addCase(register.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false;
    });

    // login
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
    });

    // send otp
    builder.addCase(sendOtp.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(sendOtp.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(sendOtp.rejected, (state, action) => {
      state.loading = false;
    });

    // verify otp
    builder.addCase(verifyOtp.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(verifyOtp.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(verifyOtp.rejected, (state, action) => {
      state.loading = false;
    });

    // reset password
    builder.addCase(resetPassword.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(resetPassword.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const {saveData, logout} = authSlice.actions;
export default authSlice;
