import { User } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: User | null;
  role: 'admin' | 'user' | null;
}

const initialState: AuthState = {
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null,
  role: localStorage.getItem('role') as 'admin' | 'user' || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.role = action.payload.role;
    },
    logout(state) {
      state.user = null;
      state.role = null;
      localStorage.removeItem('user');
      localStorage.removeItem('role');
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;