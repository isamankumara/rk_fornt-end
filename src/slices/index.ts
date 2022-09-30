import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./auth.slice";

const index = (history: any) => {
    return combineReducers({ auth: AuthSlice.reducer });
};

export default index;
