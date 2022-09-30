import { configureStore } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import root from "../slices";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/index";

const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const middlewares = [routeMiddleware, logger, thunkMiddleware, sagaMiddleware];

const saveToLocalStorage = (state: any) => {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
        console.warn(e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const serialisedState = localStorage.getItem("persistantState");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
};

const store = configureStore({
    reducer: root(history),
    preloadedState: loadFromLocalStorage(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger).concat(middlewares),
});
store.subscribe(() => saveToLocalStorage({ auth: store.getState().auth }));
sagaMiddleware.run(rootSaga,null);
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
