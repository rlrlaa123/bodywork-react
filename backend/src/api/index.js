import Router from 'koa-router';
import lessons from './lessons';

const api = new Router();

api.use('/lessons', lessons.routes());

export default api;
