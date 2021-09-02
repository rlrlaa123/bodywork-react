import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import * as lessonsAPI from "../../lib/api/lessons";
import { takeLatest } from "redux-saga/effects";

const [
  LIST_LESSONS,
  LIST_LESSONS_SUCCESS,
  LIST_LESSONS_FAILURE,
] = createRequestActionTypes("lessons/LIST_LESSONS");

export const listLessons = createAction(LIST_LESSONS, ({ page }) => ({ page }));

const listLessonsSaga = createRequestSaga(LIST_LESSONS, lessonsAPI.listLessons);
export function* lessonsSaga() {
  yield takeLatest(LIST_LESSONS, listLessonsSaga);
}

const initialState = {
  lessons: null,
  error: null,
};

const lessons = handleActions(
  {
    [LIST_LESSONS_SUCCESS]: (state, { payload: lessons }) => ({
      ...state,
      lessons,
    }),
    [LIST_LESSONS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default lessons;
