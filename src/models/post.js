import { Schema, model, models } from 'mongoose'

// const Schema = mongoose.Schema

const PostSchema = new Schema({
  title: { type: String, required: true, maxlength: 200, minlength: 3 },
  desc: { type: String, required: true, maxlength: 2500, minlength: 3 },
  user: { type: Schema.Types.ObjectId, ref: 'User', require: true },
  createdOn: { type: Date, default: new Date() },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
})

// Virtual for post's URL
PostSchema.virtual('url').get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/posts/${this._id}`
})

// Virtual Date Formatter
PostSchema.virtual('Date_formatted').get(function () {
  const createdOn = this.createdOn ? DateTime.fromJSDate(this.createdOn).toLocaleString(DateTime.DATE_MED) : ''
  return date
})

const PostModel = models.Post || model('Post', PostSchema)

export default PostModel
