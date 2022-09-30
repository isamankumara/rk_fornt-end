import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { LOGIN_REQUEST } from "../constants/auth.constants";
import { ResponseGenerator, SignInPayload, SignIParams } from "../types/authTypes";
import { authInstanceWithoutHeaders } from "../sagas";
import appSlice from "../slices/auth.slice";
import axios from 'axios'

export const signInUserWithEmailPasswordRequest = (email: string, password: string) => {
    /*const res =  authInstanceWithoutHeaders({
        method: "post",
        url: "user/login",
        data: {
            emailAddress: email,
            password: password,
        },
    });

    console.log(email)
    return res.then(resp => resp.data);;*/

    return axios.post('/users.json',{
        emailAddress: email,
        password: password,
    }).then(resp => resp);
};

export function* signInUserWithEmailPassword({ payload }: SignInPayload) {
    const { email, password } = payload;
    try {
        const signInUserResponse: ResponseGenerator = yield call(signInUserWithEmailPasswordRequest, email, password);
        yield put(appSlice.actions.setUser({ user: signInUserResponse.data.userData, token: signInUserResponse.headers["authtoken"] }));
    } catch (error) {
       // console.log("0000", error);

       // yield put(showAuthMessage(error.response.data.message)); // error payload should set to string
    }
}

function* signInUser() {
    yield takeEvery(LOGIN_REQUEST, signInUserWithEmailPassword);
}

export default function* rootSaga() {
    yield all([fork(signInUser)]);
}
