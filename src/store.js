import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { fitnessReducer } from "./reducers/fitness-reducer";

const store = createStore(fitnessReducer, applyMiddleware(thunk));

export { store };
