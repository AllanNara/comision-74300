import express from "express";
import userRouter from "./routes/user.router.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json())
app.use("/users", userRouter)


app.listen(8080, () => console.log(`listening on port 8080`))

mongoose.connect("mongodb+srv://main-user:BHYNh80457VJuhfo@devcluster.ozdfi.mongodb.net/74300?retryWrites=true&w=majority&appName=DevCluster")
  .then(() => console.log("MongoDB connected success"))
  .catch((e) => console.error("MongoDB Error: \n" + e));


