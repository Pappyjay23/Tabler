import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

interface AuthState {
  isLogged: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isLogged: !!localStorage.getItem('user'),
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
      state.isLogged = !!action.payload;
    },
    login: () => {},
    logout: () => {},
  },
});

export const { setUser, login, logout } = authSlice.actions;
export default authSlice.reducer;