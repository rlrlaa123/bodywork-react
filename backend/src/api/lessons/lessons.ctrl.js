import Lesson from '../../models/lesson';
import mongoose from 'mongoose';
import Joi from '@hapi/joi';

const { ObjectId } = mongoose.Types;

export const checkObjectId = (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400; // Bad Request
    return;
  }
  return next();
};

/* 포스트 작성
POST /api/lessons
{ title, body }
*/
export const write = async (ctx) => {
  const schema = Joi.object().keys({
    // 객체가 다음 필드를 가지고 있음을 검증
    title: Joi.string().required(), // required()가 있으면 필수 항목
    body: Joi.string().required(),
  });
  // 검증하고 나서 검증 실패인 경우 에러 처리
  const result = schema.validate(ctx.request.body);

  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }

  const { title, body } = ctx.request.body;
  const lesson = new Lesson({
    title,
    body,
  });

  try {
    await lesson.save();
    ctx.body = lesson;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 포스트 목록 조회
GET /api/lessons
*/
export const list = async (ctx) => {
  // query는 문자열이기 때문에 숫자로 변환해 주어야 합니다.
  // 값이 주어지지 않았다면 1을 기본으로 사용합니다.
  const page = parseInt(ctx.query.page || '1', 10);

  if (page < 1) {
    ctx.status = 400;
    return;
  }
  try {
    const lessons = await Lesson.find()
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .lean()
      .exec();
    const lessonCount = await Lesson.countDocuments().exec();
    ctx.set('Last-Page', Math.ceil(lessonCount / 10));
    ctx.body = lessons.map((lesson) => ({
      ...lesson,
      body:
        lesson.body.length < 200
          ? lesson.body
          : `${lesson.body.slice(0, 200)}...`,
    }));
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 특정 포스트 조회
GET /api/lessons/:id
*/
export const read = async (ctx) => {
  const { id } = ctx.params;
  try {
    const lesson = await Lesson.findById(id).exec();
    if (!lesson) {
      ctx.status = 404; // Not Found
      return;
    }
    ctx.body = lesson;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 특정 포스트 제거
DELETE /api/lessons/:id
*/
export const remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    await Lesson.findByIdAndRemove(id).exec();
    ctx.status = 204; // No Content (성공하기는 했지만 응답할 데이터는 없음)
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 포스트 수정(특정 필드 변경)
PUT /api/lessons/:id
{ title, body }
*/
export const update = async (ctx) => {
  const { id } = ctx.params;
  // write에서 사용한 schema와 비슷한데, required()가 없습니다.
  const schema = Joi.object().keys({
    // 객체가 다음 필드를 가지고 있음을 검증
    title: Joi.string(), // required()가 있으면 필수 항목
    body: Joi.string(),
  });

  // 검증하고 나서 검증 실패인 경우 에러 처리
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }

  try {
    const lesson = await Lesson.findByIdAndUpdate(id, ctx.request.body, {
      new: true, // 이 값을 설정하면 업데이트된 데이터를 반환합니다.
      // false일 때는 업데이트되기 전의 데이터를 변환합니다.
    }).exec();
    if (!lesson) {
      ctx.status = 404;
      return;
    }
    ctx.body = lesson;
  } catch (e) {
    ctx.throw(500, e);
  }
};
