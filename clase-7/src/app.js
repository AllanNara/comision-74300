import express from "express";
import userRouter from "./routes/user.router.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json())
app.use("/users", userRouter)


app.listen(8080, () => console.log(`listening on port 8080`))

// CONEXTION MONGO LOCAL (RECUERDEN REMPLAZARLO POR SU CONEXTION A MONGO ATLAS)
mongoose.connect("mongodb://127.0.0.1:27017/74300")
  .then(() => console.log("MongoDB connected success"))
  .catch((e) => console.error("MongoDB Error: \n" + e));


