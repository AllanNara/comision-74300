import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/lab");
    console.log("Connection MongoDB Success")
  } catch (error) {
    console.error(error);
    console.error("Error to conect mongo");
  }
};

connectMongo();
