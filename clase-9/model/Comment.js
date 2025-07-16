import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  text: String,
  created: {
    type: Date,
    default: new Date()
  }
})

const commentModel = mongoose.model("comments", commentSchema);

export default commentModel
