import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    auth: {},
    profile: {},
    logged: false,
  },
  reducers: {
    LOGIN: (state) => {
      state.logged = true;
    },
  },
});

export const { LOGIN  } = userSlice.actions
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
