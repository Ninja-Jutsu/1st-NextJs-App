import { Schema, model, models } from 'mongoose'

const PostSchema = new Schema({
  title: { type: String, required: true, maxlength: 200, minlength: 3 },
  desc: { type: String, required: true, maxlength: 2500, minlength: 3 },
  user: { type: Schema.Types.ObjectId, ref: 'User', require: true },
  createdOn: { type: Date, default: new Date() },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
})


const PostModel = models.Post || model('Post', PostSchema)

export default PostModel
