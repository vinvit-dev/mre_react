import {createStore} from "redux";
import initialState from "./initialState";
import rootReducer from "./reducers/rootReducer";

export const store = createStore(rootReducer, initialState);