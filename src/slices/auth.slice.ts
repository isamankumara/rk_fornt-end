import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: "",
        user: {}
    },
    reducers: {
        setUser:(state,action) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
        }
    },
});

export default authSlice;