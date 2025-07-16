import mongoose from "mongoose";
import userModel from "./model/User.js";
import commentModel from "./model/Comment.js";

const connectMongo = async () => {
  try {
    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/lab");

    const user = await userModel.findOne({ last_name: "Jones"}).populate('comments')
    // console.log(await userModel.findById('6876d1de122d7949e97add21'))

    // const comment1 = await commentModel.create({ text: "Muy clase" });
    // const comment2 = await commentModel.create({ text: "buena clase" });
    // const comment3 = await commentModel.create({ text: "Muy buena " });
    // const comment4 = await commentModel.create({ text: "hola" });
    // const comment5 = await commentModel.create({ text: "chau" });
    //
    // const commentsIds = [comment1._id, comment2._id,comment3._id,comment4._id,comment5._id]
    // console.log({ commentsIds })
    //
    // user.comments = commentsIds;  
    //

    console.log({userComments: user.comments})
    await user.save()
  } catch (error) {
    console.error(error);
    console.error("Error to conect mongo");
  }
};

connectMongo();
