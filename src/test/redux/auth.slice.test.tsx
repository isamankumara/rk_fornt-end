import React from "react";
import authReducer from "../../slices/auth.slice";

test("should return the initial state", () => {
    expect(authReducer.reducer(undefined, { type: undefined })).toEqual({ token: "", user: {} });
});

test("should handle a user being set to an empty list", () => {
    const previousState: { token: string; user: {} } = { token: "", user: {} };
    const res = { token: "", user: { firstName: "first name", lastName: "lastName" } };

    expect(authReducer.reducer(previousState, authReducer.actions.setUser(res))).toEqual({
        token: "",
        user: { firstName: "first name", lastName: "lastName" },
    });
});
