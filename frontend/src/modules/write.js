import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as lessonsAPI from "../lib/api/lessons";
import { takeLatest } from "redux-saga/effects";

const INITIALIZE = "write/INITIALIZE"; // 모든 내용 초기화
const CHANGE_FIELD = "write/CHANGE_FIELD"; // 특정 key 값 바꾸기
const [
  WRITE_LESSON,
  WRITE_LESSON_SUCCESS,
  WRITE_LESSON_FAILURE,
] = createRequestActionTypes("write/WRITE_LESSON"); // 포스트 작성

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const writeLesson = createAction(
  WRITE_LESSON,
  ({ title, content, author, email, reply, view, password }) => ({
    title,
    content,
    author,
    email,
    reply,
    view,
    password,
  })
);

// saga 생성
const writeLessonSaga = createRequestSaga(WRITE_LESSON, lessonsAPI.writeLesson);
export function* writeSaga() {
  yield takeLatest(WRITE_LESSON, writeLessonSaga);
}

const initialState = {
  title: "",
  content: "",
  author: "",
  email: "",
  reply: "",
  view: 0,
  password: "",
  lesson: null,
  lessonError: null,
};

const write = handleActions(
  {
    [INITIALIZE]: (state) => initialState, // initialState를 넣으면 초기상태로 바뀜
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
    [WRITE_LESSON]: (state) => ({
      ...state,
      // lesson와 lessonError를 초기화
      lesson: null,
      lessonError: null,
    }),
    // 포스트 작성 성공
    [WRITE_LESSON_SUCCESS]: (state, { payload: lesson }) => ({
      ...state,
      lesson,
    }),
    // 포스트 작성 실패
    [WRITE_LESSON_FAILURE]: (state, { payload: lessonError }) => ({
      ...state,
      lessonError,
    }),
  },
  initialState
);

export default write;
