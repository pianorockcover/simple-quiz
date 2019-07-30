import { createStore } from "redux";
import { reducers } from "./reducers";

export const configureStore = (initialState = {}) => {
    const store = createStore(reducers, initialState);
    return store;
};

export const store = configureStore();
