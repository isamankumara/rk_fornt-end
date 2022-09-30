import React from "react";
import { submitLogin } from "../../actions/auth.action";
import { cloneableGenerator } from "@redux-saga/testing-utils";
import { signInUserWithEmailPassword, signInUserWithEmailPasswordRequest } from "../../sagas/auth.saga";
import { expectSaga, testSaga } from "redux-saga-test-plan";
import { LOGIN_REQUEST } from "../../constants/auth.constants";
import axios from "axios";
import { runSaga } from "redux-saga";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";
import appSlice from "../../slices/auth.slice";


jest.mock("axios");

//jest.setTimeout(10000)
describe("fetchAuthorsFromApi", () => {
    it("should call sign in action", () => {
        const a = submitLogin("test.com", "ddd");
        expect(a.type).toEqual(LOGIN_REQUEST);
    });
});


test("doStuffThenChangeColor", () => {
   (axios.post as jest.Mock).mockResolvedValue({data: [], headers:{authtoken: "token"}});
    return expectSaga(signInUserWithEmailPassword, {payload: {email: "", password:""}, type: ""})
        .run();
});

test("doStuffThenChangeColor", () => {
    const error = new Error('error');
   // (axios.post as jest.Mock).mockResolvedValue({data:{}});
    return expectSaga(signInUserWithEmailPassword, {payload: {email: "", password:""}, type: ""})
    .provide([[matchers.call.fn(signInUserWithEmailPasswordRequest),error]
]).run();
});
