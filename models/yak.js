import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'Profile' },
  likes: [{type: Schema.Types.ObjectId, ref: 'Like' }],
}, {
    timestamps: true,
})

const yakSchema = new Schema({
  message: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'Profile' },
  likes: [{type: Schema.Types.ObjectId, ref: 'Like' }],
  comments: [commentSchema],
}, {
  timestamps: true,
})

const Yak = mongoose.model('Yak', yakSchema)

export {
  Yak
}