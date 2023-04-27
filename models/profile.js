import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  avatar: String,
  yaks: [{type: Schema.Types.ObjectId, ref: 'Yak' }],
  likes: [{type: Schema.Types.ObjectId, ref: 'Like' }],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}