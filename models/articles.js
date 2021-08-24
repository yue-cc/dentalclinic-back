import mongoose from 'mongoose'

const Schema = mongoose.Schema

const articleSchema = new Schema({
  name: {
    type: String,
    required: [true, '請填入文章名稱'],
    minlength: [1, '請填入文章名稱']
  },
  description: {
    type: String,
    required: [true, '請填入文章敘述'],
    minlength: [1, '請填入文章敘述']
  },
  image: {
    type: String
  }
}, { versionKey: false })

export default mongoose.model('articles', articleSchema)
