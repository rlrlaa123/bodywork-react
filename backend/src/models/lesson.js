import mongoose from 'mongoose';

const { Schema } = mongoose;

const LessonSchema = new Schema({
  title: String,
  body: String,
  publishedDate: {
    type: Date,
    default: Date.now, // 현재 날짜를 기본값으로 지정
  },
});

const Lesson = mongoose.model('Lesson', LessonSchema);
export default Lesson;
