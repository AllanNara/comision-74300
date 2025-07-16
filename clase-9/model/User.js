import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: {
    type: String,
    index: true,
  },
  gender: String,
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  age: Number,
  // comments: [{ type: mongoose.SchemaTypes.ObjectId, ref: "comments" }],
});

mongoosePaginate.paginate.options = {
  limit: 5,
  customLabels: {
    docs: "payload",
    pagingCounter: false,
    totalDocs: "users"
  }
}

userSchema.plugin(mongoosePaginate);

const userModel = mongoose.model("users", userSchema);

export default userModel;
