import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import loading from "./loading";
import write from "./write";
import alliance from "./alliance";

const rootReducer = combineReducers({
  loading,
  alliance,
  write,
});

export function* rootSaga() {
  yield all([]);
}

export default rootReducer;
