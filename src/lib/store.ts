import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import usersSlice from './usersSlice';

const store = configureStore({
    reducer: {
        authentication : authReducer,
        users : usersSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export default store
export type AppDispatch = typeof store.dispatch;