import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reserveSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  teethitems: {
    type: String
  },
  doctoritems: {
    type: String
  },
  time: {
    type: String
  },
  phone: {
    type: String
  },
  date: {
    type: Date,
    required: [true, '缺少預約日期']
  }
}, { versionKey: false })

export default mongoose.model('orders', reserveSchema)
