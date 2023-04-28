import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: { type: String, required: true },
  //The line below is referring to the Like model, which has not yet been built out yet. It will allow comments to have many likes.
  likes: [{type: Schema.Types.ObjectId, ref: 'Like' }],
}, {
    timestamps: true,
})

const yakSchema = new Schema({
  message: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
  //The line below is referring to the Like model, which has not yet been built out yet. It will allow a yak to have many likes.
  likes: [{type: Schema.Types.ObjectId, ref: 'Like' }],
  comments: [commentSchema],
}, {
  timestamps: true,
})

const Yak = mongoose.model('Yak', yakSchema)

export {
  Yak
}