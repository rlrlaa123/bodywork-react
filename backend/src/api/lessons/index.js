import Router from 'koa-router';
import * as lessonsCtrl from './lessons.ctrl';

const lessons = new Router();

lessons.get('/', lessonsCtrl.list);
lessons.post('/', lessonsCtrl.write);
lessons.get('/:id', lessonsCtrl.checkObjectId, lessonsCtrl.read);
lessons.delete('/:id', lessonsCtrl.checkObjectId, lessonsCtrl.remove);
lessons.patch('/:id', lessonsCtrl.checkObjectId, lessonsCtrl.update);

export default lessons;
