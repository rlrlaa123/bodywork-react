import Post from '../../models/post';
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

// let postId = 1; // id의 초깃값입니다.

// posts 배열 초기 데이터
// const posts = [
//   {
//     id: 1,
//     title: '제목',
//     body: '내용',
//   },
// ];

/* 포스트 작성
POST /api/posts
{ title, body }
*/
export const write = async (ctx) => {
  // // REST API의 Request Body는 ctx.request.body에서 조회할 수 있습니다.
  // const { title, body } = ctx.request.body;
  // postId += 1; // 기존 postId 값에 1을 더합니다.
  // const post = { id: postId, title, body };
  // posts.push(post);
  // ctx.body = post;

  const schema = Joi.object().keys({
    // 객체가 다음 필드를 가지고 있음을 검증
    title: Joi.string().required(), // required()가 있으면 필수 항목
    body: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(), //문자열로 이루어진  배열
  });

  // 검증하고 나서 검증 실패인 경우 에러 처리
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }

  const { title, body, tags } = ctx.request.body;
  const post = new Post({
    title,
    body,
    tags,
  });
  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 포스트 목록 조회
GET /api/posts
*/
export const list = async (ctx) => {
  // ctx.body = posts;
  try {
    const posts = await Post.find().exec();
    ctx.body = posts;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 특정 포스트 조회
GET /api/posts/:id
*/
export const read = async (ctx) => {
  const { id } = ctx.params;
  try {
    const post = await Post.findById(id).exec();
    if (!post) {
      ctx.status = 404; // Not Found
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
  // const { id } = ctx.params;
  // // 주어진 id 값으로 포스트를 찾습니다.
  // // 파라미터로 받아 온 값은 문자열 형식이므로 파라미터를 숫자로 변환하거나
  // // 비교할 p.id 값을 문자열로 변경해야 합니다.
  // const post = posts.find((p) => p.id.toString() === id);
  // // 포스트가 없으면 오류를 반환합니다.
  // if (!post) {
  //   ctx.status = 404;
  //   ctx.body = {
  //     message: '포스트가 존재하지 않습니다.',
  //   };
  //   return;
  // }
  // ctx.body = post;
};

/* 특정 포스트 제거
DELETE /api/posts/:id
*/
export const remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    await Post.findByIdAndRemove(id).exec();
    ctx.status = 204; // No Content (성공하기는 했지만 응답할 데이터는 없음)
  } catch (e) {
    ctx.throw(500, e);
  }
  // const { id } = ctx.params;
  // // 해당 id를 가진 posts가 몇 번째인지 확인합니다.
  // const index = posts.findIndex((p) => p.id.toString() === id);
  // // 포스트가 없으면 오류를 반환합니다.
  // if (index === -1) {
  //   ctx.status = 404;
  //   ctx.body = {
  //     message: '포스트가 존재하지 않습니다.',
  //   };
  //   return;
  // }
  // // index번째 아이템을 제거합니다.
  // posts.splice(index, 1);
  // ctx.status = 204; // No Content
};

/* 포스트 수정(교체)
PUT /api/posts/:id
{ title, body }
*/
// export const replace = (ctx) => {
//   // PUT 메서드는 전체 포스트 정보를 입력하여 데이터를 통째로 교체할 때 사용합니다.
//   const { id } = ctx.params;
//   // 해당 id를 가진 post가 몇 번째인지 확인합니다.
//   const index = posts.findIndex((p) => p.id.toString() === id);
//   // 포스트가 없으면 오류를 반환합니다.
//   if (index === -1) {
//     ctx.status = 404;
//     ctx.bodyt = {
//       message: '포스트가 존재하지 않습니다.',
//     };
//     return;
//   }
//   // 기존 값에 정보를 덮어 씌웁니다.
//   posts[index] = {
//     id,
//     ...ctx.request.body,
//   };
//   ctx.body = posts[index];
// };

/* 포스트 수정(특정 필드 변경)
PUT /api/posts/:id
{ title, body }
*/
export const update = async (ctx) => {
  const { id } = ctx.params;
  // write에서 사용한 schema와 비슷한데, required()가 없습니다.
  const schema = Joi.object().keys({
    // 객체가 다음 필드를 가지고 있음을 검증
    title: Joi.string(), // required()가 있으면 필수 항목
    body: Joi.string(),
    tags: Joi.array().items(Joi.string()), //문자열로 이루어진  배열
  });

  // 검증하고 나서 검증 실패인 경우 에러 처리
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }

  try {
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true, // 이 값을 설정하면 업데이트된 데이터를 반환합니다.
      // false일 때는 업데이트되기 전의 데이터를 변환합니다.
    }).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
  // // PATCH 메서드는 주어진 필드만 교체합니다.
  // const { id } = ctx.params;
  // // 해당 id를 가진 post가 몇 번째인지 확인합니다.
  // const index = posts.findIndex((p) => p.id.toString() === id);
  // // 포스트가 없으면 오류를 반환합니다.
  // if (index === -1) {
  //   ctx.status = 404;
  //   ctx.bodyt = {
  //     message: '포스트가 존재하지 않습니다.',
  //   };
  //   return;
  // }
  // // 기존 값에 정보를 덮어 씌웁니다.
  // posts[index] = {
  //   ...posts[index],
  //   ...ctx.request.body,
  // };
  // ctx.body = posts[index];
};
