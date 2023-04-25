import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'Profile' },
  likes: [{type: Schema.Types.ObjectId, ref: 'Like' }],
})

const yakSchema = new Schema({
  message: { type: String, required: true },
  likes: [{type: Schema.Types.ObjectId, ref: 'Like' }],
  author: { type: Schema.Types.ObjectId, ref: 'Profile' },
  // comments: [commentSchema],
}, {
  timestamps: true,
})

const Yak = mongoose.model('Yak', yakSchema)

export {
  Yak
}