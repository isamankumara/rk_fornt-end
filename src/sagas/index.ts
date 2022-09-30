import { all } from 'redux-saga/effects';
import authSagas from './auth.saga';
import axios from "axios";

require("dotenv").config();

export default function* rootSaga(getState: any) {
    yield all([
        authSagas()
    ]);
}
 
export const authInstanceWithoutHeaders = axios.create({
    baseURL: process.env.REACT_APP_HOST
  });
