import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import loading from "./loading";
import write, { writeSaga } from "./lessons/write";
import lesson, { lessonSaga } from "./lessons/lesson";
import alliance from "./alliance";

const rootReducer = combineReducers({
  loading,
  alliance,
  write,
  lesson,
});

export function* rootSaga() {
  yield all([writeSaga(), lessonSaga()]);
}

export default rootReducer;
