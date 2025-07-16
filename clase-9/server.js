import express from "express";
import './connectMongoose.js'
import userModel from "./model/User.js";
import { PaginationParameters } from "mongoose-paginate-v2"

const server = express();

//http://localhost:8080/users?page=22&query=%22{%22last_name%22:%22jones%22}%22&limit=1
server.get("/users", async (req, res) => {
  const parsedQuery = new PaginationParameters(req)
  const queries = parsedQuery.get()
  const result = await userModel.paginate(...queries);
                            //     {<queries>}, {<opciones de paginacio>}
  res.json(result)
})


server.listen(8080, () => console.log("Server up"))
