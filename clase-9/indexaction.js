import mongoose from "mongoose";
import userModel from "./model/User.js";

const connectMongo = async () => {
  try {
    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/lab");
    
    const usersFind = await userModel.find().explain("executionStats");
    const userFindOne = await userModel.find({ last_name: "Jones"}).explain("executionStats");
    const userFindByEmail = await userModel.find({ email: 'hgurge4f@pcworld.com'}).explain("executionStats");


    // await userModel.create({
    //   first_name: "Juan", 
    //   last_name: "Jones",
    //   age: 23,
    //   gender: "Male",
    //   email: "junajo@mail.co"
    // })
    //
    // console.log(await userModel.find({ last_name: "Jones"}))
    


    console.log({ usersFind: usersFind.executionStats.executionTimeMillis + " miliseconds" })
    console.log({ userFindOne: userFindOne.executionStats.executionTimeMillis + " miliseconds" })
    console.log({ userFindByEmail: userFindByEmail.executionStats.executionTimeMillis + " miliseconds" })
    

  } catch (error) {
    console.error(error)
    console.error("Error to conect mongo")  
  }

}


connectMongo()
