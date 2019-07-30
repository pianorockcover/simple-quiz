import { createStore, applyMiddleware } from "redux";
import { dataReducer } from "./reducers";
import thunk from "redux-thunk";


const middlewares = [thunk];
export const configureStore = (initialState = {}) => {
    const store = createStore(dataReducer, initialState, applyMiddleware(...middlewares));
    return store;
};

export const store = configureStore();
