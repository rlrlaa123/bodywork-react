import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import write from "./write";
import alliance from "./alliance";

const rootReducer = combineReducers({
  alliance,
  write,
});

export function* rootSaga() {
  yield all([]);
}

export default rootReducer;
