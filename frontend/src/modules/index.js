import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import loading from "./loading";
import write, { writeSaga } from "./lessons/write";
import lesson, { lessonSaga } from "./lessons/lesson";
import lessons, { lessonsSaga } from "./lessons/lessons";
import alliance from "./alliance";

const rootReducer = combineReducers({
  loading,
  alliance,
  write,
  lesson,
  lessons,
});

export function* rootSaga() {
  yield all([writeSaga(), lessonSaga(), lessonsSaga()]);
}

export default rootReducer;
