import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import { createWrapper } from "next-redux-wrapper";

const bindMiddleware = (middleware) => {
    return applyMiddleware(...middleware);
};

export const makeStore = (context) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

export const wrapper = createWrapper(makeStore, { debug: false });
