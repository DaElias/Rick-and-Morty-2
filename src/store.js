import { createStore, applyMiddleware } from "redux";
import personajesReducer from "./reducer/personajesReducer";
import thunk from "redux-thunk";



// import logActions from "./middlewares";
// import createSagaMiddleware from "@redux-saga/core";

// const sagaMiddleware = createSagaMiddleware();
// const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
// const composeEnhacers = composeAlt(
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(thunk)
// );

export const store = createStore(personajesReducer, applyMiddleware(thunk));
