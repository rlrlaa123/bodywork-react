import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import * as lessonsAPI from "../../lib/api/lessons";
import { takeLatest } from "redux-saga/effects";

const [
  READ_LESSON,
  READ_LESSON_SUCCESS,
  READ_LESSON_FAILURE,
] = createRequestActionTypes("lesson/READ_LESSON");
const UNLOAD_LESSON = "lesson/UNLOAD_LESSON"; // PT레슨 페ㅣ지에서 벗어날 때 데이터 비우기

export const readLesson = createAction(READ_LESSON, (id) => id);
export const unloadLesson = createAction(UNLOAD_LESSON);

const readLessonSaga = createRequestSaga(READ_LESSON, lessonsAPI.readLesson);
export function* lessonSaga() {
  yield takeLatest(READ_LESSON, readLessonSaga);
}

const initialState = {
  lesson: null,
  lessonError: null,
};

const lesson = handleActions(
  {
    [READ_LESSON_SUCCESS]: (state, { payload: lesson }) => ({
      ...state,
      lesson,
    }),
    [READ_LESSON_FAILURE]: (state, { payload: lessonError }) => ({
      ...state,
      lessonError,
    }),
    [UNLOAD_LESSON]: () => initialState,
  },
  initialState
);

export default lesson;
