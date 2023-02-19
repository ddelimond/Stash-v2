import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        registeredUser: null,
        error: false,
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
            setTimeout(() => { state.error = false }, 2000)
        },
        registerStart: (state) => {
            state.isFetching = true;

        },
        registerSuccess: (state) => {
            state.isFetching = false;
            state.registeredUser = action.payload;
        },
        registerFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logout: (state) => {
            state.currentUser = null
        }
    },
});

export const { loginStart, loginSuccess, loginFailure, registerStart, registerFailure, registerSuccess, logout } = userSlice.actions;
export default userSlice.reducer;
