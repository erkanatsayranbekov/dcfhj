import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  username: string;
  avatar: string;
  email: string;
  password: string;
  id: string;
}

interface UsersState {
  users: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: UsersState = {
  users: [],
  status: 'idle',
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get<User[]>('https://65ba5e3eb4d53c066552bb1a.mockapi.io/users');
  return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default usersSlice.reducer;
export type UserState = User;